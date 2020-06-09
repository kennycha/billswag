# Bill Clinton Swag cloning

## 계획

- mobile web first (min-width)
- lastfm API
- API server
  - django
- App
  - vue

## API Server

> api server url : `https://billswag.herokuapp.com/api/`

- packages

  - bs4
  - requests

- api (app)

  - settings.py

    ```
    INSTALLED_APPS = [
    	'requests',
        'decouple',
    	...
        'api',
    ]
    ```

  - views.py

    ```python
    from bs4 import BeautifulSoup
    import requests
    from decouple import config
    
    from django.shortcuts import render
    from django.http import JsonResponse
    from django.views.decorators.http import require_GET
    
    # Create your views here.
    API_KEY = config('API_KEY')
    
    @require_GET
    def search(request, q):
        API_URL = f'http://ws.audioscrobbler.com/2.0/?method=album.search&album={q}&api_key={API_KEY}&format=json&limit=5'
        data = requests.get(API_URL).json()
        return JsonResponse(data)
    ```

- 배포

  - packages

    - gunicorn
    - dj-database-url
    - psycopg2-binary
    - whitenoise

  - settings.py

    ```python
    DEBUG = bool(os.environ.get('DJANGO_DEBUG', True))
    
    SECRET_KEY = os.environ.get('DJANGO_SECRET_KEY', 'examplesecretkey123')
    
    import dj_database_url 
    db_from_env = dj_database_url.config(conn_max_age=500) 
    DATABASES['default'].update(db_from_env)
    
    MIDDLEWARE = [
    	'whitenoise.middleware.WhiteNoiseMiddleware',
    	...	
    ]
    ```

  - Procfile

    ```
    web: gunicorn billswag.wsgi --log-file -
    ```

  - runtime.txt

    ```
    python-3.8.2
    ```

  - requirements.txt

    ```bash
    $ pip freeze > requirements.txt
    ```

- API_KEY handling with Heroku

  - https://sung.codes/blog/2017/09/09/passing-api-key-heroku-node-application/

  - https://devcenter.heroku.com/articles/config-vars

  - http://boto.cloudhackers.com/en/latest/s3_tut.html

  - heroku 환경변수 등록

    ```bash
    $ heroku config:set LASTFM_API_KEY=exampleapikey123
    ```

  - heroku 환경변수 불러오기

    ```python
    # view.py
    import os
    
    LASTFM_API_KEY = os.environ.get('LASTFM_API_KEY', True)
    ```

  - :bulb: 이때 아래와 같이 작성할 경우, 컴파일 단계에서는 해당 키가 존재하지 않기 때문에 `key error` 가 발생한다

    ```python
    # view.py
    import os
    
    LASTFM_API_KEY = os.environ.get('LASTFM_API_KEY')
    ```
  
- CORS handling in Django

  - `django-cors-headers` 활용

  - https://github.com/adamchainz/django-cors-headers

    ```python
    # settings.py
    
    INSTALLED_APPS = [
        ...
        'corsheaders',
        ...
    ]
    
    MIDDLEWARE = [  # Or MIDDLEWARE_CLASSES on Django < 1.10
        ...
        'corsheaders.middleware.CorsMiddleware',
        ...
    ]
    
    CORS_ORIGIN_ALLOW_ALL = True
    ```

## Web App