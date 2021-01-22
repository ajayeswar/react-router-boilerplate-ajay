export const API = {
 fetchBotAdmin : function(){
    return fetch("https://api.dictionaryapi.dev/api/v2/entries/en/enjoy")
    .then(res => res.json())
    .then(
        (result) => ({"supportBotEnabled": false, "isGeniusEnabled": true, "doc_folder_base_path": null, "enable_web_activity_tracking": true, "customer_account_type": "CUSTOMER", "enable_slider_node": true, "enable_document_lookup": true, "branding_key": "ENGATI BRAND", "help_videos_link": "https://engati.com/videos.html", "enable_esign": true, "customerPlan": "ENGATI_ENTERPRISE", "branding_favicon_path": "https://s3.ap-south-1.amazonaws.com/branding-resources/default/favicon", "enable_themes": true, "name": "Thomas Shelby (AJ)", "is_bp_enabled": true, "branding_platform_name": "Engati", "enable_launch_screen": true, "knowledge_base_link": "https://docs.engati.com/documentation/introduction/platform-introduction/", "bot_creator_mode": true, "organization": "ajayConnectEnterprise@gmail.com", "is_lc_enabled": true, "admin_access_right": true, "admin_mode_access": {"enable_master_admin_settings": true, "master_admin_access": true, "enable_manage_customer": true, "enable_subscription_settings": true, "enable_create_partner": false, "enable_branding_setup": false, "role": "ROLE_KEY_OWNER", "enable_record_payment": true, "enable_template_creator": false, "enable_customer_settings": true, "get_account": true, "live_chat": true, "enable_bot_store": true, "enable_template_settings": false, "enable_send_transaction_mail": true, "enable_enforcement_settings": false, "enable_mark_test_account": false}, "live_chat_provider": "DEFAULT", "active_module": "ENGATI_BOT_PLATFORM", "support_email": {"type": "email", "value": "support@engati.com"}, "feedback_on_resolution": false, "location": true, "sample_faq_file": "https://branding-resources.s3.ap-south-1.amazonaws.com/default/sample_upload_file.csv", "enable_card_node": true, "access_control_entitlement": true, "view_access": {"bot_creator_mode_access": true, "connect": {"conversation_wallpaper_upload": true}, "module_switcher": true, "bot_csr_home_screen_access": false, "live_chat": true, "invite_link_access": true, "bot_changes_access": true, "view_bot_access": true}, "cid": 4038, "customer_under_reseller": false, "createdOn": 1599387068000, "welcome_flags": {"SMART_RESPONSES": {"show_welcome": true, "is_new_customer": true}, "CONNECT_LAUNCH": {"show_welcome": false, "is_new_customer": false}}, "profileImg": "https://s3.ap-south-1.amazonaws.com/file-upload-public/dev/4038/USER_PROFILE_IMAGE/21392_people_1.png-lPvP9.png", "reseller_login": false, "is_engati_brand": true, "theme_color": "#E50F29", "is_c2e_enabled": true, "is_merchant": null, "status": "ACTIVE", "enable_feedback_node": true, "file_upload": "NEW", "email": "ajayConnectEnterprise@gmail.com", "left_panels": {"settings": true, "retain": true, "sales_dashboard": false, "channels": true, "search_analytics": false, "agent_dashboard": false, "engage": true, "get_document_lookup": true, "upload_car_specs": false, "campaigns": true, "entity": true, "build": true, "file_upload_analytics": true, "faq": true, "promote": true, "integrations": true, "data_source": true, "dashboard": true, "customer_support_request": true, "integration_api": true, "frustration": false, "faq_analytics": true, "deploy": true, "advance_faq": true, "portal_user": true, "faq_training": true, "pathBuilder": true, "users": true, "broadcast": true, "support_dashboard": true, "api_error_history": true, "all_conversations_access": true, "live_chat": true, "account": true, "configure": true, "pricing_page": true, "get_build_faq_api": true, "shopping": true}, "uid": 5554, "business_portal_link": null, "modules": [{"id": 3, "updatedOn": 1590771112000, "createdOn": 1590771112000, "name": "ENGATI_CONNECT"}, {"id": 1, "updatedOn": 1584633880000, "createdOn": 1584633880000, "name": "ENGATI_BOT_PLATFORM"}], "unified_module": false, "customerEngagePlan": "ENGATI_LIVECHAT", "engati_zapier_app_url": "https://zapier.com/developer/invite/98066/cbcfbc82dd4bc93066816b35bfd5ad05/", "welcome_flag": false, "custom_roles": {}, "is_livechat_advanced_feature": true}),
        (error) => errorHandlingService(error)
    )
 },
 unsplashAPI: function(pageNo){
    return fetch(`https://api.unsplash.com/photos/?page=${pageNo}&per_page=20&client_id=cFm3As2nrxSQYJXB_eyFpFoYHTDBW0Bhjzj5_KnEnwY`)
    .then(res => res.json())
    .then(
        (result) => result,
        (error) => errorHandlingService(error)
    )
 }
};

function errorHandlingService (error){
    console.log("error log",error)
}

