.PHONY: install build types publish

install:
	docker compose exec node npm install

build: install
	docker compose exec node npm --workspace @aminnairi/react-switch run build

types: build
	docker compose exec node npm --workspace @aminnairi/react-switch run types

publish: types
	docker compose exec node npm --workspace @aminnairi/react-switch publish --access public
