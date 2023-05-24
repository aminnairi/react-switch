# Contributing

## Requirements

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)
- [Git](https://git-scm.com/)

## Clone

```bash
git clone https://github.com/aminnairi/react-switch
cd react-switch
```

## Docker Compose Startup

```bash
docker compose up --detach
```

## Dependencies Installation

```bash
docker compose exec node npm install
```

## Package Build

```bash
docker compose exec node npm --workspace sources run build
```

## Type Definition Build

```bash
docker compose exec node npm --workspace sources run types
```

## Example Startup

```bash
docker compose exec node npm --workspace example start
```

## Publishing

```bash
docker compose exec node npm --workspace sources publish --access public
```
