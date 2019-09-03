import {Page} from './Page';

const page = new Page();

//  Commands to run:
//  testcafe chrome,firefox,edge,ie tests -t "Search Button Test" --skip-js-errors
//  testcafe chrome,firefox,edge,ie tests -f "WWW30" --skip-js-errors
//  testcafe chrome,firefox,edge,ie tests --skip-js-errors

fixture('WWW30')
    .page('https://www.monster.com')
    .beforeEach(async t => {
        await t.maximizeWindow();
    });

test('Search Button Test', async t => {
    await t
        .expect(page.findJobsButton.exists).ok()
        .expect(page.findJobsButton.textContent).contains('Find Jobs');
});


fixture('JobView 30')
    .page('https://job-openings.monster.com/view/211440511')
    .beforeEach(async t => {
        await t.maximizeWindow();
    });

test('View Page - Apply Button Test', async t => {
    await t
        .expect(page.jobViewApplyButton.exists).ok()
        .expect(page.jobViewApplyButton.textContent).contains('Apply');
});

test('Apply Page - Submit Button Test', async t => {
    await t
        .click(page.jobViewApplyButton);
    await t
        .expect(page.continueToApplyButton.exists).ok()
        .expect(page.continueToApplyButton.textContent).contains('Continue to Apply');
});


fixture('Updated By Jijot')
    .page('www.monster.com')
    .beforeEach(async t => {
        await t.maximizeWindow();
    });

test('Perform A Job Search', async t => {
    await t
        .typeText(page.keywordField, 'Software Engineer')
        .typeText(page.locationField, 'Boston, MA')
        .click(page.findJobsButton);
    await t
        .expect(page.h1SearchResult.textContent).contains('Software Engineer Jobs in Boston, MA');
});

test('JobSearch Result: Load More Button', async t => {
    await t
        .typeText(page.keywordField, 'Software Engineer')
        .click(page.findJobsButton);
    await t
        .expect(page.searchResults.count).eql(26)
        .expect(page.loadMoreButton.exists).ok()
        .click(page.loadMoreButton);
    await t
        .expect(page.searchResults.count).eql(52);
});

test('Save A Job: Saved Icon And Notification Message', async t => {
    await t
        .typeText(page.keywordField, 'Software Engineer')
        .typeText(page.locationField, 'Boston, MA')
        .click(page.findJobsButton);
    await t
        .click(page.userAvatar)
        .click(page.loginDropdown);
    await t
        .typeText(page.emailAddress, 'jijot1@gmail.com', {paste: true})
        .typeText(page.password, 'seekers111')
        .click(page.loginButton);
    await t
        .click(page.jobCard.nth(1));
    await t
        .click(page.saveJobButton);
    await t
        .expect(page.successAlert.exists).ok()
        .expect(page.saveJobButtonText.textContent).contains('Saved')
        // Delete saved job
        .click(page.userAvatar)
        .click(page.savedJobsDropdown);
    await t
        .click(page.deleteSavedJob)
        .click(page.confirmDelete);
});