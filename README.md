## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run the benchmark

```bash
$ npm run start
```

In another terminal, run the benchmark:

```bash
$ npm run bench
```

## Benchmark results

| **Metric**                                  | **Value** |
| ------------------------------------------- | --------- |
| **HTTP Codes**                              |           |
| `http.codes.201`                            | 103437    |
| **HTTP Downloads**                          |           |
| `http.downloaded_bytes`                     | 0         |
| **HTTP Request Rate**                       |           |
| `http.request_rate`                         | 245/sec   |
| **HTTP Requests**                           |           |
| `http.requests`                             | 103437    |
| **HTTP Response Time**                      |           |
| `min`                                       | 0         |
| `max`                                       | 31        |
| `mean`                                      | 0.7       |
| `median`                                    | 1         |
| `p95`                                       | 2         |
| `p99`                                       | 5         |
| **HTTP Response Time (2xx)**                |           |
| `min`                                       | 0         |
| `max`                                       | 31        |
| `mean`                                      | 0.7       |
| `median`                                    | 1         |
| `p95`                                       | 2         |
| `p99`                                       | 5         |
| **HTTP Responses**                          |           |
| `http.responses`                            | 103437    |
| **Socket.IO**                               |           |
| `socketio.emit`                             | 104013    |
| `socketio.emit_rate`                        | 248/sec   |
| **Socket.IO Response Time**                 |           |
| `min`                                       | 0         |
| `max`                                       | 9.9       |
| `mean`                                      | 0.1       |
| `median`                                    | 0.1       |
| `p95`                                       | 0.1       |
| `p99`                                       | 0.2       |
| **Virtual Users**                           |           |
| `vusers.completed`                          | 69150     |
| `vusers.created`                            | 69150     |
| `vusers.created_by_name.HTTP Scenario`      | 34479     |
| `vusers.created_by_name.WebSocket Scenario` | 34671     |
| `vusers.failed`                             | 0         |
| **Virtual Users Session Length**            |           |
| `min`                                       | 2000.6    |
| `max`                                       | 2067.7    |
| `mean`                                      | 2005.8    |
| `median`                                    | 2018.7    |
| `p95`                                       | 2018.7    |
| `p99`                                       | 2018.7    |
