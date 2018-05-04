build:
	docker build -t foundation .

run:
	docker run -p 49160:3000 -d foundation
