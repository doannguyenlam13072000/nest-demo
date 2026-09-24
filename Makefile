.PHONY: help
.PHONY: dev dev-web dev-api
.PHONY: docker-up docker-down docker-restart docker-logs docker-ps
.PHONY: db-up db-down db-logs
.PHONY: lint build test

# =========================
# Default
# =========================

help:
	@echo "Available commands:"
	@echo ""
	@echo "  make dev              Start web + api"
	@echo "  make dev-web          Start web"
	@echo "  make dev-api          Start api"
	@echo ""
	@echo "  make docker-up        Start MongoDB + Redis"
	@echo "  make docker-down      Stop MongoDB + Redis"
	@echo "  make docker-restart   Restart MongoDB + Redis"
	@echo "  make docker-logs      Show Docker logs"
	@echo "  make docker-ps        Show running containers"
	@echo ""
	@echo "  make lint             Lint all packages"
	@echo "  make build            Build all packages"
	@echo "  make test             Run tests"

# =========================
# Development
# =========================

dev:
	pnpm dev:web & pnpm dev:api & wait

dev-web:
	pnpm dev:web

dev-api:
	pnpm dev:api

# =========================
# Docker
# =========================

docker-up:
	docker compose -f infrastructure/docker-compose.yml up -d

docker-down:
	docker compose -f infrastructure/docker-compose.yml down

docker-restart:
	docker compose -f infrastructure/docker-compose.yml restart

docker-logs:
	docker compose -f infrastructure/docker-compose.yml logs -f

docker-ps:
	docker compose -f infrastructure/docker-compose.yml ps

# =========================
# Database
# =========================

db-up: docker-up

db-down: docker-down

db-logs:
	docker compose -f infrastructure/docker-compose.yml logs -f mongodb redis

# =========================
# Code quality
# =========================

lint:
	pnpm lint:web
	pnpm lint:api

build:
	pnpm --recursive build

test:
	pnpm --recursive test