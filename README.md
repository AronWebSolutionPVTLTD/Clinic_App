# Clinic_App
Clinic Appp


# Clinic_App.postman_collection.json
 
{
	"info": {
		"_postman_id": "5cd5c48a-648e-463c-a041-f93555bfd9ce",
		"name": "Clinic_App",
		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json",
		"_exporter_id": "27544025"
	},
	"item": [
		{
			"name": "CreateUser",
			"request": {
				"method": "POST",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\r\n   \"RoleName\":\"Doc\",\r\n   \"Status\":\"Active\"\r\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "http://localhost:5000/api/create_role",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "5000",
					"path": [
						"api",
						"create_role"
					]
				}
			},
			"response": []
		},
		{
			"name": "CreateRole",
			"request": {
				"method": "POST",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\r\n   \"rolename\":\"Doctor\",\r\n   \"Status\":true\r\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "http://localhost:5000/api/create_role",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "5000",
					"path": [
						"api",
						"create_role"
					]
				}
			},
			"response": []
		},
		{
			"name": "CreateRoom",
			"request": {
				"method": "POST",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\r\n   \"RoleName\":\"Doc\",\r\n   \"Status\":\"Active\"\r\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "http://localhost:5000/api/create_role",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "5000",
					"path": [
						"api",
						"create_role"
					]
				}
			},
			"response": []
		},
		{
			"name": "CreateDevice",
			"request": {
				"method": "POST",
				"header": []
			},
			"response": []
		},
		{
			"name": "createDeviceMapping",
			"request": {
				"method": "POST",
				"header": []
			},
			"response": []
		},
		{
			"name": "createPatientFlow",
			"request": {
				"method": "POST",
				"header": []
			},
			"response": []
		},
		{
			"name": "GetAllUsers",
			"request": {
				"method": "GET",
				"header": []
			},
			"response": []
		},
		{
			"name": "GetAllRoles",
			"request": {
				"method": "GET",
				"header": []
			},
			"response": []
		},
		{
			"name": "GetAllDevices",
			"request": {
				"method": "GET",
				"header": []
			},
			"response": []
		},
		{
			"name": "UpdateUser",
			"request": {
				"method": "PUT",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\r\n    \"id\":\"647f284dadf4f5d4d291234a\",\r\n    \"firstname\":\"Sachin\"\r\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "http://localhost:5000/api/update_user",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "5000",
					"path": [
						"api",
						"update_user"
					]
				}
			},
			"response": []
		},
		{
			"name": "New Request",
			"request": {
				"method": "GET",
				"header": []
			},
			"response": []
		}
	]
}
