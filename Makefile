start_db:
	sudo docker-compose up 
stop_db:
	sudo docker-compose down 
server:
	npm run dev

.PHONEY: start_db stop_db server