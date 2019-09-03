import { Selector } from 'testcafe';

export class Page {

    constructor() {
        //main
        this.findJobsButton = Selector('#doQuickSearch2');
        this.keywordField = Selector('#q2');
        this.locationField = Selector('#where2');
        this.searchResults = Selector('.flex-row div header');
        this.loadMoreButton = Selector('#loadMoreJobs');
        this.h1SearchResult = Selector('.title h1');

        //job related
        this.h1Text = Selector('.title h1');
        this.jobCard = Selector('.flex-row div header');
        this.jobHeading = Selector('.heading h1');
        this.jobViewApplyButton = Selector('#PrimaryJobApply');
        this.continueToApplyButton = Selector('#BodyCaoApply');

        //save job
        this.saveJobButton = Selector('#SaveButton');
        this.saveJobButtonText = Selector('#SaveButton a span');
        this.deleteSavedJob = Selector('.deleteSaved i');
        this.confirmDelete = Selector('.btn-Submit');

        //login
        this.userAvatar = Selector('.navbar-profile-icon.center-block').nth(1);
        this.loginDropdown = Selector('.dropdown-menu li a');
        this.emailAddress = Selector('#EmailAddress');
        this.password = Selector('#Password');
        this.loginButton = Selector('#btn-login');
        this.userNameLabel = Selector('#account-dropdown-toggle span span').nth(1);
        this.signInLink = Selector('.navbar-toggle.nav-trigger.action.action--open').nth(1);

        //notification
        this.savedJobsDropdown = Selector('.dropdown-menu li a').nth(0);
        this.successAlert = Selector('.icon.icon-success');
    }
}
