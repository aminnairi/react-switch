.PHONY: start stop restart install build types publish example example-build test

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

example: types
	docker compose exec $(DOCKER_COMPOSE_EXEC_OPTIONS) node npm --workspace example start

example-build: types
	docker compose exec $(DOCKER_COMPOSE_EXEC_OPTIONS) node npm --workspace example run build

test: types
	docker compose exec $(DOCKER_COMPOSE_EXEC_OPTIONS) node npm --workspace @aminnairi/react-switch test
