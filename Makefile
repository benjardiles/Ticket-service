.PHONY: install build down start up test prune lint help

DOCKER_COMPOSE ?= docker-compose
COMPOSE_DIR ?= docker/docker-compose
COMPOSE_TEST_DIR ?= docker/docker-compose.test
COMPOSE_DEBUG_DIR ?= docker/docker-compose.debug
MAIN_SERVICE_TARGET ?= ticket-service

install:
	$(info Make: Install dependencies of the project)
	@$(DOCKER_COMPOSE) -f $(COMPOSE_DIR).yml run --rm ticket-service npm install --save

build:
	$(info Make: Build images(s) of the service)
	@$(DOCKER_COMPOSE) -f $(COMPOSE_DIR).yml build

down:
	$(info Make: Removing service(s))
	@$(DOCKER_COMPOSE) -f $(COMPOSE_DIR).yml down --remove-orphans

start:
	$(info Make: Starting service(s) in background (detached))
	@$(DOCKER_COMPOSE) -f $(COMPOSE_DIR).yml up -d

up:
	$(info Make: Starting service(s) no detached)
	@$(DOCKER_COMPOSE) -f $(COMPOSE_DIR).yml up

test:
	$(info Make: Running tests located on /test)
	@$(DOCKER_COMPOSE) -f $(COMPOSE_DIR).yml run --rm ticket-service npm run test

lint:
	$(info Make: Linting project)
	@$(DOCKER_COMPOSE) -f $(COMPOSE_DIR).yml run --rm ticket-service npm run lint

prune:
	$(info Make: Running docker prune)
	docker system prune -a

help: ## Help messages showed
	@echo ''
	@echo 'Usage: make [TARGET] [EXTRA_ARGUMENTS]'
	@echo 'Targets:'
	@echo '  start              start service in background. Default make command.'
	@echo '  install            install dependencies of the project.'
	@echo '  build              building service in background.'
	@echo '  down               downstreaming the service, removing orphans.'
	@echo '  debug             debug services in foreground.'
	@echo '  up             start services in foreground.'
	@echo '  lint               execute lint check over project.'
	@echo '  test               running test service.'
	@echo '  model-test         running databse model test service.'
	@echo '  prune              prune docker system.'
	@echo '  help               show help'
	@echo ''
