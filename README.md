# Breaker (Server)

Koa, MongoDB를 사용한 API 서버이며
[HRetan](https://github.com/HRetan/Breaker) 게임 개발 프로젝트의 API 서버입니다.

## Features

-   GET /api/maps
-   POST /api/maps
-   GET /api/maps/:id
-   DELETE /api/maps/:id
-   PUT /api/maps/:id

## Map 리스트 조회

> GET /api/maps?owner={owner}

param은 생략가능하며, owner 입력시 해당 user에 대한 리스트만 조회합니다.

### Response
GET /api/maps
```json
{
        "_id": "5c4ffb83484f0349341a1e32",
        "title": "retan Title1",
        "owner": "retan",
        "__v": 0
},
{
        "_id": "5c4ffb83484f0349341a1e33",
        "title": "retan Title2",
        "owner": "retan",
        "__v": 0
},
{
        "_id": "5c4ffb83484f0349341a1e34",
        "title": "lucas Title1",
        "owner": "lucas",
        "__v": 0
},
(...)
```
GET /api/maps?owner=lucas
```json
{
        "_id": "5c4ffb83484f0349341a1e48",
        "title": "lucas Title1",
        "owner": "lucas",
        "__v": 0
},
{
        "_id": "5c4ffb83484f0349341a1e49",
        "title": "lucas Title2",
        "owner": "lucas",
        "__v": 0
},
(...)
```

## Map 정보 업로드

> POST /api/maps

### Request Body
POST /api/maps
```json
{
	"title":"delete test",
	"owner":"lucas",
	"mapData":[
		{
			"blockID":10,
			"iIndex":68
		},
		{
			"blockID":10,
			"iIndex":94
		}
	]
}
```

Request body에 포함되지 않는 field는 자동으로 채워집니다.

### Response
POST /api/maps
```json
{
    "bestScore": {
        "user": "uknown",
        "score": 0
    },
    "count": 0,
    "createDate": "2019-01-29T07:28:15.947Z",
    "_id": "5c50070c10449e45ec4beaa4",
    "title": "delete test",
    "owner": "lucas",
    "mapData": [
        {
            "_id": "5c50070c10449e45ec4beaa6",
            "blockID": 10,
            "iIndex": 68
        },
        {
            "_id": "5c50070c10449e45ec4beaa5",
            "blockID": 10,
            "iIndex": 94
        }
    ],
    "__v": 0
}
```

## Map 상세 조회

> GET /api/maps/:id

### Response
GET /api/maps/5c50070c10449e45ec4beaa4
```json
{
    "bestScore": {
        "user": "uknown",
        "score": 0
    },
    "count": 0,
    "createDate": "2019-01-29T07:28:15.947Z",
    "_id": "5c50070c10449e45ec4beaa4",
    "title": "delete test",
    "owner": "lucas",
    "mapData": [
        {
            "_id": "5c50070c10449e45ec4beaa6",
            "blockID": 10,
            "iIndex": 68
        },
        {
            "_id": "5c50070c10449e45ec4beaa5",
            "blockID": 10,
            "iIndex": 94
        }
    ],
    "__v": 0
}
```

## Map 삭제

> DELETE /api/maps/:id

### Response
DELETE /api/maps/5c50070c10449e45ec4beaa4
```json
{}
```

## Map 수정

> PUT /api/maps/:id

모든필드에 대해 수정이 가능하며, 그중 bestScore를 수정하는 예입니다.

### Request Body
PUT /api/maps/5c50070c10449e45ec4beaa4
```json
{
	"bestScore" : {
		"user" : "lucas",
		"score" : 12312321
	}
}
```

### Response
PUT /api/maps/5c50070c10449e45ec4beaa4
```json
{
    "bestScore": {
        "user": "lucas",
        "score": 12312321
    },
    "count": 0,
    "createDate": "2019-01-29T07:28:15.947Z",
    "_id": "5c50070c10449e45ec4beaa4",
    "title": "delete test",
    "owner": "lucas",
    "mapData": [
        {
            "_id": "5c50070c10449e45ec4beaa6",
            "blockID": 10,
            "iIndex": 68
        },
        {
            "_id": "5c50070c10449e45ec4beaa5",
            "blockID": 10,
            "iIndex": 94
        }
    ],
    "__v": 0
}
```
