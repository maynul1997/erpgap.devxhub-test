import { Selector } from 'testcafe';

fixture`TestController.scrollIntoView`
    .page`https://erpgap.devxhub.com//`;

test('Scroll the webpage', async t => {
    for (let i = 0; i < 20; i++) {
        await t.scrollBy(0,300);
        await t.wait(500);
    }

    for (let i = 0; i < 20; i++) {
        await t.scrollBy(0,-300);
        await t.wait(500);
    }
});


test.only('blog visit', async t=>{
    await t.click("#nav-blog");
    for (let i = 0; i < 20; i++) {
        await t.scrollBy(0,300);
        await t.wait(500);
    }

    for (let i = 0; i < 20; i++) {
        await t.scrollBy(0,-300);
        await t.wait(500);
    }

})
