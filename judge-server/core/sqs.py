import json
import boto3

from judge import judge

from mongodb import get_submission, update_submission
from utils import save_submission

from logger import log

def polling_judge_queue():
    try:
        client = boto3.client(
            'sqs',
            aws_access_key_id="~~~",
            aws_secret_access_key="~~~",
            region_name="ap-northeast-2",
        )

        response = client.receive_message(
            QueueUrl="https://sqs.ap-northeast-2.amazonaws.com/~~~",
            WaitTimeSeconds=1,
        )
        
        if response.get('Messages') == None:
            return
        
        message = response['Messages']
        submission_id = json.loads(message[0]['Body'])['id']

        log('submission incomming id: {}'.format(submission_id))

        submission = get_submission(submission_id)

        save_submission(submission)
        
        judge_result = judge(submission['id'], submission['language'], submission['problem'])

        if judge_result:
            update_submission(submission_id, judge_result)
            client.delete_message(
                QueueUrl="https://sqs.ap-northeast-2.amazonaws.com/~~~",
                ReceiptHandle=message[0]['ReceiptHandle'],
            )
            log("Remove Submission From Queue")
        else:
            log("Judge Fail")
    except (BaseException) as err:
        raise

if __name__ == "__main__":
    while True:
        polling_judge_queue()