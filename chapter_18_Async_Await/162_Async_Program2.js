// whenever a function returns a Promise we will always use await

function getToken() {
    return Promise.resolve("abc123");
}

//Playwright
//page.goto() - Promise()
//await page.goto()

async function run() {
    let token = await getToken();
    console.log(token);
}

run();