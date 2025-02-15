FROM python:alpine3.21
ENV PYTHONUNBUFFERED 1

WORKDIR /app/

COPY . /app/
RUN pip install -Ur requirements.txt

EXPOSE 80
CMD ["fastapi","run","/app/main.py","--port","80"]

