<h1 align="center">Authentication using nodejs,typescript and mongodb</h1>

## :information_source: About
A Node application for authentication using typescript,express and mongoDB
![1_NFt9edTKLJ-zL6yTdTX0nA](https://user-images.githubusercontent.com/31761132/73010697-b4c12600-3e34-11ea-8216-bfe2f40856da.png)



## :hammer: Technologies Used
 
- typescript
- express
- mongoDB
- jsonwebtoken
- lodash


## :rocket: Installation
1. Get the code

    ```bash
    git clone git@github.com:AurangzaibRamzan/authentication-using-node-typescript-mongodb.git && cd authentication-using-node-typescript-mongodb
    ```

2. Install dependencies

    ```bash
    npm install
    ```


3. Starts the development server
   
   ```bash
    npm run dev
    ```

4. Starts the production server
   
   ```bash
    npm run start
    ```

5. Runs the linter.
   
   ```bash
    npm run lint
    ```

     ```bash
    npm run lint-fix
    ```

## :twisted_rightwards_arrows:: Routes

1. http://localhost:3000/user/signup
2. http://localhost:3000/user/login
3. http://localhost:3000/user/    (with token in header i.e header :{token:""})
4. http://localhost:3000/user/changepassword


## 🤝 Contributing [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
The process of submitting a pull request is fairly straightforward and generally follows the same pattern each time:

<details><summary><b>Show instructions</b></summary>

1. Search [GitHub](https://github.com/AurangzaibRamzan/authentication-using-node-typescript-mongodb/pulls) for an open or closed PR that relates to your submission. You don't want to duplicate effort.

2. [Fork](http://help.github.com/fork-a-repo/) this project, clone your fork, and configure the remotes:

    ```bash
    # Clone your fork of the repo into the current directory
    git clone https://github.com/<your-username>/<repo-name>
    # Navigate to the newly cloned directory
    cd <repo-name>
    # Assign the original repo to a remote called "upstream"
    git remote add upstream https://github.com/AurangzaibRamzan/authentication-using-node-typescript-mongodb.git
    ```

3. If you cloned a while ago, get the latest changes from upstream:

    ```bash
    git checkout master
    git pull upstream master
    ```

4. Create a new branch (off the master branch) to contain your feature, change or fix:

    ```bash
    git checkout -b <branch-name>
    ```

5. After you have made your changes, run tests and lint checks:
    ```bash
    # for test
    npm test
    ```
    ```bash
    # for lint check
    npm run lint
    ```
    ```bash
    # for lint fix
    npm run lint-fix
    ```

6. Commit your changes using a descriptive commit message.

7. Rebase onto upstream

8. Push your branch to GitHub:

    ```bash
    git push origin <branch-name>
    ```

7. [Open a Pull Request](https://help.github.com/articles/using-pull-requests/) using your branch and fill the [required template](.github/pull_request_template.md).

**IMPORTANT**: By submitting a patch, you agree to license your work under the same license as that used by the project.

</details>

> Having trouble with repo? Check out our documentation or contact Support aurangzaib987@gmail.com

## :page_facing_up: License

This project is licensed under the Apache License 2.0, see the [LICENSE](LICENSE) file for details.




    
    
