var search_data = {"index":{"searchIndex":["admincontroller","adminhelper","answer","answerscontroller","answershelper","applicationcontroller","applicationhelper","moderatorcontroller","moderatorhelper","question","questionscontroller","questionshelper","sitesetting","sitesettingscontroller","sitesettingshelper","user","users","registrationscontroller","sessionscontroller","userscontroller","usershelper","vote","votescontroller","voteshelper","configure_permitted_parameters()","create()","create()","create()","create()","destroy()","edit()","get_setting()","get_setting()","index()","index()","index()","my_vote()","my_vote()","new()","new()","show()","show()","tagged()","update()","user_is_admin()","user_is_mod()","verify_admin()","verify_moderator()","readme"],"longSearchIndex":["admincontroller","adminhelper","answer","answerscontroller","answershelper","applicationcontroller","applicationhelper","moderatorcontroller","moderatorhelper","question","questionscontroller","questionshelper","sitesetting","sitesettingscontroller","sitesettingshelper","user","users","users::registrationscontroller","users::sessionscontroller","userscontroller","usershelper","vote","votescontroller","voteshelper","applicationcontroller#configure_permitted_parameters()","answerscontroller#create()","questionscontroller#create()","users::registrationscontroller#create()","votescontroller#create()","votescontroller#destroy()","sitesettingscontroller#edit()","applicationcontroller#get_setting()","applicationhelper#get_setting()","questionscontroller#index()","sitesettingscontroller#index()","userscontroller#index()","answershelper#my_vote()","questionshelper#my_vote()","answerscontroller#new()","questionscontroller#new()","questionscontroller#show()","userscontroller#show()","questionscontroller#tagged()","sitesettingscontroller#update()","applicationhelper#user_is_admin()","applicationhelper#user_is_mod()","applicationcontroller#verify_admin()","applicationcontroller#verify_moderator()",""],"info":[["AdminController","","AdminController.html","","<p>Web controller. Provides authenticated actions for use by administrators.\n"],["AdminHelper","","AdminHelper.html","","<p>Provides helper methods for use by views under\n<code>AdminController</code>.\n"],["Answer","","Answer.html","","<p>Represents one answer. Answers are attached to both a question and a user\naccount; have a score, and …\n"],["AnswersController","","AnswersController.html","","<p>Web controller. Provides actions that relate to answers. Pretty much the\nstandard set of resources, really …\n"],["AnswersHelper","","AnswersHelper.html","","<p>Provides helper methods for use by views under\n<code>AnswersController</code>.\n"],["ApplicationController","","ApplicationController.html","","<p>Application controller. This is the overarching control center for the\napplication, which every web controller …\n"],["ApplicationHelper","","ApplicationHelper.html","","<p>Provides helper methods for use by views under\n<code>ApplicationController</code> (and by extension, every view). …\n"],["ModeratorController","","ModeratorController.html","","<p>Web controller. Provides authenticated actions for use by moderators.\n"],["ModeratorHelper","","ModeratorHelper.html","","<p>Provides helper methods for use by views under\n<code>ModeratorController</code>.\n"],["Question","","Question.html","","<p>Represents a question. Questions are attached to a user account, and have\nmany answers, a score, and …\n"],["QuestionsController","","QuestionsController.html","","<p>Web controller. Provides actions that relate to questions - this is\nessentially the standard set of resources, …\n"],["QuestionsHelper","","QuestionsHelper.html","","<p>Provides helper methods for use by views under\n<code>QuestionsController</code>.\n"],["SiteSetting","","SiteSetting.html","","<p>Represents a site setting. Site settings control the operation and display\nof most aspects of the site, …\n"],["SiteSettingsController","","SiteSettingsController.html","","<p>Web controller. Provides authenticated actions for use by administrators in\ncontrolling the site settings …\n"],["SiteSettingsHelper","","SiteSettingsHelper.html","","<p>Provides helper methods for use by views under\n<code>SiteSettingsController</code>.\n"],["User","","User.html","","<p>Represents a user. Most of the User&#39;s logic is controlled by Devise and\nits overrides. A user, as …\n"],["Users","","Users.html","",""],["Users::RegistrationsController","","Users/RegistrationsController.html","","<p>An extended version of the Devise registrations controller, which is\noverridden so that we can add additional …\n"],["Users::SessionsController","","Users/SessionsController.html","","<p>An extended version of the Devise sessions controller. Don&#39;t know why I\noverrode this one, I haven&#39;t …\n"],["UsersController","","UsersController.html","","<p>Web controller. Provides actions that relate to users. Does not deal with\naccounts, registrations, sessions …\n"],["UsersHelper","","UsersHelper.html","","<p>Provides helper methods for use by views under\n<code>UsersController</code>.\n"],["Vote","","Vote.html","","<p>Represents a vote. A vote is attached to both a &#39;post&#39; (i.e. a\nquestion or an answer - this is …\n"],["VotesController","","VotesController.html","","<p>Web controller. Provides actions for using voting features - essentially a\nstripped-down and renamed …\n"],["VotesHelper","","VotesHelper.html","","<p>Provides helper methods for use by views under\n<code>VotesController</code>.\n"],["configure_permitted_parameters","ApplicationController","ApplicationController.html#method-i-configure_permitted_parameters","()","<p>Re-configures the parameters that the Devise parameter sanitizer will allow\nthrough. By default, this …\n"],["create","AnswersController","AnswersController.html#method-i-create","()","<p>Authenticated web action. Based on the data submitted from the\n<code>new</code> view, creates a new answer. Assumes …\n"],["create","QuestionsController","QuestionsController.html#method-i-create","()","<p>Authenticated web action. Based on data submitted from the <code>new</code>\nview, creates a new question. Explicitly …\n"],["create","Users::RegistrationsController","Users/RegistrationsController.html#method-i-create","()","<p>Extends the Devise default RegistrationsController#create. Additionally\ninitializes a reputation score …\n"],["create","VotesController","VotesController.html#method-i-create","()","<p>Authenticated web action. Casts a vote on behalf of a user. This is just\nabout the most complex action …\n"],["destroy","VotesController","VotesController.html#method-i-destroy","()","<p>Authenticated web action. Removes a vote that has already been cast, and\nhandles re-calculating post …\n"],["edit","SiteSettingsController","SiteSettingsController.html#method-i-edit","()","<p>Authenticated administrator web action. Retrieves a single site setting for\nediting.\n"],["get_setting","ApplicationController","ApplicationController.html#method-i-get_setting","(name)","<p>Retrieves the value of the site setting specified by <code>name</code>.\nThis method is essentially a helper method …\n"],["get_setting","ApplicationHelper","ApplicationHelper.html#method-i-get_setting","(name)","<p>Identical to <code>ApplicationController#get_setting</code>. Retrieves the\nvalue of a site setting based on the name, …\n"],["index","QuestionsController","QuestionsController.html#method-i-index","()","<p>Web action. Retrieves a paginated list of all the questions currently in\nthe database for use by the …\n"],["index","SiteSettingsController","SiteSettingsController.html#method-i-index","()","<p>Authenticated administrator web action. Retrieves a paginated list of all\nsite settings.\n"],["index","UsersController","UsersController.html#method-i-index","()","<p>Web action. Retrieves a paginated list of all users.\n"],["my_vote","AnswersHelper","AnswersHelper.html#method-i-my_vote","(answer)","<p>Given an answer, returns the vote on it that belongs to the current user,\nor nil if there isn&#39;t one. …\n"],["my_vote","QuestionsHelper","QuestionsHelper.html#method-i-my_vote","(question)","<p>Essentially identical to <code>AnswersHelper#my_vote</code> - returns the\ncurrent user&#39;s vote on the given question, …\n"],["new","AnswersController","AnswersController.html#method-i-new","()","<p>Authenticated web action. Creates a new answer as a resource for form\ncreation in the view.\n"],["new","QuestionsController","QuestionsController.html#method-i-new","()","<p>Authenticated web action. Creates a new question as a resource for form\ncreation in the view.\n"],["show","QuestionsController","QuestionsController.html#method-i-show","()","<p>Web action. Retrieves a single question, specified by the query string\nparameter <code>id</code>.\n"],["show","UsersController","UsersController.html#method-i-show","()","<p>Web action. Retrieves a single user.\n"],["tagged","QuestionsController","QuestionsController.html#method-i-tagged","()","<p>Web action. Retrieves a paginated list of all questions where the tags\ncontain a tag specified in the …\n"],["update","SiteSettingsController","SiteSettingsController.html#method-i-update","()","<p>Authenticated administrator web action. Applies new values submitted by the\nuser to a single site setting. …\n"],["user_is_admin","ApplicationHelper","ApplicationHelper.html#method-i-user_is_admin","()","<p>Similar to <code>ApplicationController#verify_admin</code>, but doesn&#39;t\nraise errors. Simply returns yea or nay. …\n"],["user_is_mod","ApplicationHelper","ApplicationHelper.html#method-i-user_is_mod","()","<p>Similar to <code>ApplicationController#verify_moderator</code>, but\ndoesn&#39;t raise errors if the user is not a …\n"],["verify_admin","ApplicationController","ApplicationController.html#method-i-verify_admin","()","<p>Very similar to verify_moderator. Verifies that the currently signed in\nuser is an administrator; throws …\n"],["verify_moderator","ApplicationController","ApplicationController.html#method-i-verify_moderator","()","<p>Verifies that the currently signed in user is, in fact, a moderator. This\nmethod assumes that it is used …\n"],["README","","README_rdoc.html","","<p>README\n<p>This README would normally document whatever steps are necessary to get the\napplication up and …\n"]]}}