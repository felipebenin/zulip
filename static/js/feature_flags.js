var feature_flags = (function () {

var exports = {};

// Helpers
var special_24_hour_people= _.contains([],
    page_params.email);

var zulip_mit_emails = [];
var is_zulip_mit_user = _.contains(zulip_mit_emails, page_params.email);

var iceland = page_params.domain === 'customer8.invalid';

var customer4_realms = [
  'customer4.invalid',
  'users.customer4.invalid'
];
var is_customer4 = _.contains(customer4_realms, page_params.domain);

// Enterprise-related flags
exports.do_not_share_the_love = page_params.enterprise;

// Manually-flipped debugging flags
exports.log_send_times = false;
exports.collect_send_times = false;

// Permanent realm-specific stuff:
exports.disable_message_editing = _.contains(['mit.edu'], page_params.domain);

exports.twenty_four_hour_time = special_24_hour_people || iceland;

exports.mandatory_topics = _.contains([
    'customer7.invalid'
    ],
    page_params.domain
);

exports.left_side_userlist = page_params.staging || _.contains(['customer7.invalid'], page_params.domain);
//This was set as a page_params variable already, because it's also used in
//the settings.html django template. See zerver/views/__init__.py:home(request).
exports.show_autoscroll_forever_option = page_params.show_autoscroll_forever_option;

// Still very beta:

exports.full_width = false; //page_params.staging;
exports.local_echo = page_params.staging || is_customer4;

exports.show_digest_email_setting = page_params.staging;

// Still burning in...
exports.fade_users_when_composing = true;
exports.mark_read_at_bottom = true;
exports.propagate_topic_edits = true;
exports.summarize_read_while_narrowed = false;
exports.clicking_notification_causes_narrow = true;
exports.use_socket = true;

// Ready for deprecation.
exports.collapsible = false;
exports.dropbox_integration = false;

return exports;

}());
