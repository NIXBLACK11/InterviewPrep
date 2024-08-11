FROM ubuntu:20.02
WORKDIR /app
COPY . .
ADD https://google.com/testdata
RUN touch testfile.env
EXPOSE 3000
CMD ["python3", "test.py"]
ENTRYPOINT ["python3", "test2.py"]