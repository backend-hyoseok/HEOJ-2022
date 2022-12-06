import { css } from '@emotion/react';
import { useRef, useState } from 'react';
import Select, { SingleValue } from 'react-select';
import CodeMirror, { ReactCodeMirrorRef } from '@uiw/react-codemirror';
import { python } from '@codemirror/lang-python';
import { cpp } from '@codemirror/lang-cpp';
import { java } from '@codemirror/lang-java';
import { dracula } from '@uiw/codemirror-theme-dracula';
import useSubmission from '../hooks/useSubmission';
import Router from 'next/router';
import { Stats } from 'fs';

interface ProblemOption {
  number: string;
  title: string;
}

interface LanguageOption {
  name: string;
  extension: ReturnType<typeof python>[];
}

const problemOptions: ProblemOption[] = [
  { number: 'A', title: 'A. 웰컴 문제' },
  { number: 'B', title: 'B. 배열의 원소 찾기 ( Easy )' },
  { number: 'C', title: 'C. 알파벳과 숫자로 이루어진 문자열' },
  { number: 'D', title: 'D. 오버플로우' },
  { number: 'E', title: 'E. 발행 구독 디자인 패턴' },
  { number: 'F', title: 'F. 배열의 원소 지우기' },
  { number: 'G', title: 'G. 배열의 원소 찾기 ( Hard )' },
  { number: 'H', title: 'H. 블록체인 네트워크' },
  { number: 'I', title: 'I. 문자열 복원하기' },
];

const languageOptions: LanguageOption[] = [
  { name: 'C', extension: [cpp()] },
  { name: 'C++', extension: [cpp()] },
  { name: 'Python', extension: [python()] },
  { name: 'Java', extension: [java()] },
];

interface SubmitSubmissionFormProps {
  selectedProblem: string;
}

const style = {
  label: css`
    padding: 12px 0;
  `,
  submit: css`
    margin: 12px 0;
    text-align: right;
    color: white;

    display: flex;
    flex-direction: row-reverse;

    align-items: center;
  `,
  submitText: css`
    background-color: #303f9f;
    padding: 12px 16px;
    border-radius: 12px;
  `,
  error: css`
    font-size: 12px;
    color: red;
    padding: 0px 12px;
  `,
};

const SubmitSubmissionForm = ({
  selectedProblem,
}: SubmitSubmissionFormProps) => {
  const [selectedProblemOption, setSelectedProblemOption] = useState<
    SingleValue<ProblemOption>
  >(
    problemOptions.find(({ number }) => number === selectedProblem) ??
      problemOptions[0],
  );

  const [selectedLanguageOption, setSelectedLanguageOption] = useState<
    SingleValue<LanguageOption>
  >(languageOptions[2]);

  const [isShowError, setIsShowError] = useState<boolean>(false);

  const codeRef = useRef<string>('');

  const { mutate, status } = useSubmission();

  const onCodeChange = (value: string) => {
    codeRef.current = value;
  };

  const handleSubmit = () => {
    if (status === 'idle' || status === 'error') {
      mutate(
        {
          code: codeRef.current,
          language: selectedLanguageOption?.name ?? '',
          problem: selectedProblemOption?.number ?? '',
        },
        {
          onSuccess: () => Router.push('/problem/status'),
          onError: () => setIsShowError(true),
        },
      );
    }
  };

  return (
    <div>
      <div css={style.label}>문제</div>
      <Select<ProblemOption>
        defaultValue={problemOptions.find(
          ({ number }) => number === selectedProblem,
        )}
        options={problemOptions}
        onChange={setSelectedProblemOption}
        getOptionLabel={(problemOption: ProblemOption) => problemOption.title}
        getOptionValue={(problemOption: ProblemOption) => problemOption.number}
        isClearable={false}
        isSearchable={false}
      />
      <div css={style.label}>언어</div>
      <Select<LanguageOption>
        defaultValue={languageOptions[2]}
        options={languageOptions}
        onChange={setSelectedLanguageOption}
        getOptionLabel={(problemOption: LanguageOption) => problemOption.name}
        getOptionValue={(problemOption: LanguageOption) => problemOption.name}
        isClearable={false}
        isSearchable={false}
      />
      <div css={style.label}>코드</div>
      <CodeMirror
        height="500px"
        extensions={selectedLanguageOption?.extension}
        theme={dracula}
        onChange={onCodeChange}
      />
      <div css={style.submit}>
        <div css={style.submitText} onClick={handleSubmit}>
          제출하기
        </div>
        {isShowError ? (
          <div css={style.error}>
            제출 과정에 오류가 발생했습니다. 대회 운영진에게 문의하세요.
          </div>
        ) : undefined}
      </div>
    </div>
  );
};

export default SubmitSubmissionForm;
