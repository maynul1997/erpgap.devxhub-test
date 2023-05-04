
import { Selector } from 'testcafe'

fixture`Getting Started`

.page`https://erpgap.devxhub.com/` 

test('Valid signup test', async t=>{
    await t.click("#signin2");
})