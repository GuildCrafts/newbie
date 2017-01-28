### Local environment setup

* ###### Install IDM
  ```
  $ ./go install-idm
  ```

* ######Setup .env
  * Create development env file in root directory: .env.development
  * Paste in the following code:
  ```
  DATABASE_URL='postgres://[**local user name** ]@localhost:5432/noob-development'
  JWT_PUBLIC_KEY="[**your public key**]"
  ```
  * Get your local user name with `$ whoami`
  * Public key is located `$ /tmp/public-key.pem`
  * Create test env file in root directory: .env.test
  * Paste in the following code:
  ```
  DATABASE_URL='postgres://[**local user name** ]@localhost:5432/noob-test'
  JWT_PUBLIC_KEY="[**your public key**]"
  ```
* ###### Run IDM and mehserve
  * Open a new terminal window and navigate to IDM directory:
    ```
    $ npm start
    ```
  * Open another terminal window and navigate to IDM directory:
    ```
    $ mehserve run
    ```

* ###### Run these scripts
  * Install packages:
    ```
    $ ./go init
    ```
  * Create database:
    ```
    $ ./go create_db development
    ```

  * Run tests:
    ```
    $ ./go test
    ```
    
### Start the dev server
  ```
  $ ./go start
  ```
