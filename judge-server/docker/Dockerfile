# syntax=docker/dockerfile:1
FROM ubuntu:22.04

# Install Python
RUN apt-get update && apt-get install -y python3 python3-pip openjdk-18-jdk && \
  pip3 install Flask gunicorn boto3 "pymongo[srv]"

COPY core /code
RUN mkdir debug
RUN mkdir log
RUN touch /log/gunicorn.log
RUN touch /log/py.log

COPY testcase /testcases
RUN mkdir submissions

RUN python3 testcases/B/gen.py
RUN python3 testcases/C/gen.py
RUN python3 testcases/D/gen.py
RUN python3 testcases/E/gen.py
RUN python3 testcases/F/gen.py
RUN python3 testcases/G/gen.py
RUN python3 testcases/H/gen.py

WORKDIR /code
RUN python3 syscallparser.py

EXPOSE 8080

USER root
ENTRYPOINT python3 sqs.py