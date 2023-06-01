.PHONY: start stop restart install build types publish example test

DOCKER_COMPOSE_EXEC_OPTIONS=

ifeq (${CI},true)
	DOCKER_COMPOSE_EXEC_OPTIONS=--user root -T
endif

start:
	docker compose up --detach

stop:
	docker compose down --remove-orphans --volumes --timeout 0

restart: stop start

install: start
	docker compose exec $(DOCKER_COMPOSE_EXEC_OPTIONS) node npm install

build: install
	docker compose exec $(DOCKER_COMPOSE_EXEC_OPTIONS) node npm --workspace @aminnairi/react-switch run build

types: build
	docker compose exec $(DOCKER_COMPOSE_EXEC_OPTIONS) node npm --workspace @aminnairi/react-switch run types

publish: types
	docker compose exec $(DOCKER_COMPOSE_EXEC_OPTIONS) node npm --workspace @aminnairi/react-switch publish --access public

example: install
	docker compose exec $(DOCKER_COMPOSE_EXEC_OPTIONS) node npm --workspace example start

test: build
	docker compose exec $(DOCKER_COMPOSE_EXEC_OPTIONS) node npm --workspace @aminnairi/react-switch test
