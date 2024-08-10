FROM ubuntu:20.02
COPY . .
ADD https://google.com/testdata
RUN touch testfile.env
CMD ["python3", "test.py"]
ENTRYPOINT ["python3", "test2.py"]
