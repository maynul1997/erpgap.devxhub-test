import { Selector } from 'testcafe';

fixture`TestController.scrollIntoView`
    .page`https://erpgap.devxhub.com//`;

test('Scroll the webpage', async t => {
    await t.scrollBy(0,300);
    await t.wait(500);
    
});