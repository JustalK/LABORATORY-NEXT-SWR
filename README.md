# LABORATORY-NEXTJS-SWR

This project is a laboratory for testing `swr` on `Next.js`. With SWR, components will get a stream of data updates constantly and automatically.
And the UI will be always fast and reactive.

I wanted to create this example since the mutation principle is not that easy to understand at first. Data need to be updated on the `backend` and in the `cache`
or else the information shown on the screen become invalidated.

I tried to show how to do since the official documentation on vercel does not explain it in details.

## Plan of the presentation

I explain with all the details how I build the project and my way of working.

- [Infrastructure](#infrastructure)
- [Organization](#organization)
- [Running](#running)
- [Links](#links)

## Infrastructure

The Infrastructure of this project is composed of 4 services :

- **Mongodb**: The database where the information will be saved
- **Frontend**: The Next.js application where I will be using `swr`
- **Backend**: A simple `Express` application
- **Nginx**: Using the `jwilder` image for creating a reverse proxy based on the services

## Organization

#### Organization of the global folder

| Folder's Name  | Description of the folder                               |
| :------------- | :------------------------------------------------------ |
| `backend`      | The express application                                 |
| `frontend`     | The Next.js application                                 |
| `mongodb`      | The database                                            |
| `nginx`        | The reverse proxy handler                               |

#### Organization of the backend folder

| Folder's Name | Description of the folder                               |
| :------------ | :------------------------------------------------------ |
| `dbs`         | Regroup the direct call to the database                 |
| `env`         | Regroup the environment files                           |
| `models`      | Regroup the models                                      |
| `routes`      | Regroup the routes for the rest API                     |

#### Organization of the frontend folder

| Folder's Name | Description of the folder                               |
| :------------ | :------------------------------------------------------ |
| `pages`       | Regroup the pages which create the routing              |
| `services`    | Regroup the calls to the backend                        |
| `styles`      | Regroup the CSS styles of the frontend                  |

#### Organization of the mongodb folder

| Folder's Name | Description of the folder                               |
| :------------ | :------------------------------------------------------ |
| `data`        | Created automatically, the data of the backend          |
| `init`        | The scripts that will create the auth user              |

#### Organization of the nginx folder

| Folder's Name | Description of the folder                               |
| :------------ | :------------------------------------------------------ |
| `conf.d`      | Created automatically, the reverse proxy configuration  |

## Running

You can run or stop the application with one command :

```bash
$ npm run start
$ npm run stop
```

You can then visit the following url in your browser : http://frontend.net/
In case, it does not work, you might need to modify your /etc/hosts and add the following line :

```
127.0.0.1 frontend.net backend.net
```

## Links

- [Official swr documentation](https://swr.vercel.app/)
