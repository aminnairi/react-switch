.PHONY: start stop restart install build types publish

start:
	docker compose up --detach

stop:
	docker compose down --remove-orphans --volumes --timeout 0

restart: stop start

install: start
	docker compose exec node npm install

build: install
	docker compose exec node npm --workspace @aminnairi/react-switch run build

types: build
	docker compose exec node npm --workspace @aminnairi/react-switch run types

publish: types
	docker compose exec node npm --workspace @aminnairi/react-switch publish --access public
