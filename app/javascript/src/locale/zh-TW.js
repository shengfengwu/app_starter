I18n.translations || (I18n.translations = {});
I18n.translations["zh-TW"] = I18n.extend((I18n.translations["zh-TW"] || {}), {"aasm_state":{"admin":null,"brand":null,"product":null,"product/image":null,"product/variant":null,"product_category":null,"site_config":null,"user":null,"user/collection":null,"user/shipping_info":null},"actions":{"admin":{"add_new":"新增%{model}","add_product_option_type":"增加商品選項類型","add_product_option_value":"增加選項","add_product_property":"增加商品屬性欄位","cancel":"取消","change_password":"變更密碼","close":"關閉","confirm":"確認","confirm_to_delete":"確認刪除%{model}","create":"建立%{model}","delete":"刪除","destroy":"刪除%{modle}","detail_of":"%{model}詳細內容","edit":"編輯","edit_on":"編輯%{model}","get_info_for":"查看%{model}","index":"%{model}列表","login":"登入","logout":"登出","management":"管理%{model}","new":"建立%{model}","open":"開啟","options":"選項","preview":"預覽","reply":"回覆","reset_search":"清除條件","save":"儲存","save_and_go_to_next_step":"儲存並前往下一步","search":"搜尋","search_by":"以%{attribute_name}搜尋","search_for":"搜尋%{model_name}","show":"詳細內容","submit":"送出資料","suspend_admin":"停權","unsuspend_admin":"復權","update_config":"更新設定","update_profile":"編輯檔案"}},"activerecord":{"attributes":{"admin":{"avatar":"頭像","confirmation_sent_at":"認證信寄出時間","confirmation_token":"認證 TOKEN","confirmed_at":"認證時間","created_at":"建立時間","current_password":"原始密碼","current_sign_in_at":"現在登入狀態開始於","current_sign_in_ip":"現在登入中的 IP 位址","email":"電子信箱","encrypted_password":"加密後的密碼","failed_attempts":"錯誤嘗試次數","is_suspended":"已停權","last_sign_in_at":"上次登入於","last_sign_in_ip":"上次登入的 IP 位址","locked_at":"封鎖時間","name":"姓名","new_password":"新密碼","password":"密碼","password_confirmation":"確認密碼","remember_created_at":null,"remember_me":"記住我的資訊","reset_password_sent_at":"重置密碼引導信件祭出時間","reset_password_token":"重置密碼 TOKEN","role":"角色","sign_in_count":"登入次數","unconfirmed_email":"未認證 Email","unlock_token":"解除封鎖 TOKEN","updated_at":"更新於"},"brand":{"description":"品牌介紹","introduce":"簡介","logo":"Logo","name":"名稱","products_count":"產品數量"},"product":{"brand_id":"品牌","category":"分類","category_id":"分類","cover":"封面圖片","depth":"寬","description":"商品描述","description_images":"敘述圖片","discount_unit":"折","discounted_price":"折扣價","height":"高","images":"圖片","is_preorder":"預購商品","meta_description":"META 描述","meta_keywords":"META 關鍵字","meta_title":"META 標題","name":"品名","normal_images":"商品圖片","option_name":"選項類型","option_types":"商品選項","option_value":"選項","original_price":"進貨成本","price_unit":"元","properties":"商品屬性","property_name":"屬性名稱","property_unit":"單位","property_value":"內容","sell_price":"售價","size":"尺寸","sku":"SKU","sub_category":"子分類","weight":"重量","width":"長"},"product/image":{"image":"圖片","use_case":"用於"},"product/variant":{"depth":"寬","description":"描述","discount_unit":"折","discounted_price":"折扣價","height":"高","is_master":"主規格","name":"名稱","original_price":"進貨成本","price_unit":"元","product_id":"商品","sell_price":"售價","sku":"SKU","weight":"重量","width":"長"},"product_category":{"description":"敘述","has_sub_categories":"擁有子分類","name":"分類名稱","parent":"父分類","products_count":"產品數量","sub_categories":"子分類","sub_category_name":"子分類名稱"},"site_config":{"description":"網站描述","keywords":"關鍵字","locale":"語系","meta_tags":"網頁索引設定","reverse":"反向排序","separator":"分隔符","site_name":"網站名稱","type":"類型"},"user":{"avatar":"頭像","confirmation_sent_at":"認證信寄出時間","confirmation_token":"認證 TOKEN","confirmed_at":"認證時間","created_at":"建立時間","current_password":"原始密碼","current_sign_in_at":"現在登入狀態開始於","current_sign_in_ip":"現在登入中的 IP 位址","email":"電子信箱","encrypted_password":"加密後的密碼","failed_attempts":"錯誤嘗試次數","last_sign_in_at":"上次登入於","last_sign_in_ip":"上次登入的 IP 位址","locked_at":"封鎖時間","name":"姓名","new_password":"新密碼","password":"密碼","password_confirmation":"確認密碼","remember_created_at":null,"remember_me":"記住我的資訊","reset_password_sent_at":"重置密碼引導信件祭出時間","reset_password_token":"重置密碼 TOKEN","sign_in_count":"登入次數","unconfirmed_email":"未認證 Email","unlock_token":"解除封鎖 TOKEN","updated_at":"更新於"},"user/collection":{"product":"商品","product_id":"商品","product_name":"商品名稱","product_pic":"商品圖片"},"user/shipping_info":{"address":"收貨地址","city":"縣市 / 城市","country":"國家","phone":"聯絡電話","recipient":"收貨人","street_address":"地址","zip":"郵遞區號"}},"errors":{"messages":{"record_invalid":"校驗失敗: %{errors}","restrict_dependent_destroy":{"has_many":"由於 %{record} 需要此記錄，所以無法移除記錄","has_one":"由於 %{record} 需要此記錄，所以無法移除記錄"}},"models":{"admin":{"attributes":{"email":{"invalid_email_format":"Email 格式有誤"},"new_password":{"password_mismatch":"兩次輸入的密碼不相同"},"password":{"password_mismatch":"兩次輸入的密碼不相同"}}},"brand":{"attributes":null},"product":{"attributes":{"option_types":{"option_value_blank":"選項內容未填寫","type_name_blank":"選項類型內容未填寫"},"price":{"invalid_discounted_price":"折扣價不能大於售價","invalid_key":"%{key} 為不合法的 key，僅能接受 original, sell, discounted","wrong_type":"%{key} 必須為 Integer, 並大於或等於 0"}}},"product/image":{"attributes":{"use_case":{"invalid_value":"`%{value}` 並不是合法的值，請輸入 `normal` 或 `description`。"}}},"product/variant":{"attributes":null},"product_category":{"attributes":{"parent_id":{"too_many_level":"分類的層次關係過多，最多僅能有兩層子類別"}}},"site_config":{"attributes":null},"user":{"attributes":null},"user/collection":{"attributes":null},"user/shipping_info":{"attributes":{"address":{"detail_blank":"%{attribute} 尚未填寫"}}}}},"models":{"admin":{"one":"管理員","other":"管理員"},"brand":{"one":"品牌","other":"品牌"},"product":{"one":"商品","other":"商品"},"product/image":{"one":"商品圖片","other":"商品圖片"},"product/variant":{"one":"規格選項","other":"規格選項"},"product_category":{"one":"商品分類","other":"商品分類"},"site_config":{"one":"系統設定","other":"系統設定"},"user":{"one":"會員","other":"會員"},"user/collection":{"one":"收藏商品","other":"收藏商品"},"user/shipping_info":{"one":"常用收貨地址","other":"常用收貨地址"}}},"admin":{"common":{"admin_root":"管理首頁","administrator":"管理員"}},"devise":{"confirmations":{"confirmed":"您的帳號已通過驗證，現在您已成功登入。","new":{"resend_confirmation_instructions":"重新寄送確認信"},"send_instructions":"您將在幾分鐘後收到一封電子郵件，內有驗證帳號的步驟說明。","send_paranoid_instructions":"如果我們有您的信箱，您將會收到一封驗證您的帳號的電子郵件。"},"failure":{"already_authenticated":"您已經登入。","inactive":"您的帳號尚未被啟用。","invalid":"Invalid %{authentication_keys} or password.","last_attempt":"您還有最後一次嘗試機會，再次失敗您的帳號將會被鎖定。","locked":"您的帳號已被鎖定。","not_found_in_database":"Invalid %{authentication_keys} or password.","timeout":"您的登入時效過期，請重新登入。","unauthenticated":"您需要先登入或註冊後才能繼續。","unconfirmed":"您的帳號需要經過驗證後，才能繼續。"},"mailer":{"confirmation_instructions":{"action":"確認帳號","greeting":"%{recipient} 您好!","instruction":"您可以利用下面的連結確認您的帳戶的電子郵件：","subject":"帳號驗證步驟"},"email_changed":{"subject":"Email Changed"},"password_change":{"greeting":"您好 %{recipient}!","message":"它會通知您，您的密碼已被更改。","subject":"密碼已更改"},"reset_password_instructions":{"action":"更改我的密碼","greeting":"您好 %{recipient}!","instruction":"有人要求更改密碼的連結，您可以利用下面的連結更改密碼。","instruction_2":"如果您沒有要求，請忽略此電子郵件。","instruction_3":"如果您沒有進入上面的連結，並建立新的密碼，您的密碼不會被改變。","subject":"密碼重設步驟"},"unlock_instructions":{"action":"帳戶解鎖","greeting":"您好 %{recipient}!","instruction":"點擊下面的連結到您的帳戶進行解鎖：","message":"由於多次不成功的登入嘗試，您的帳戶已被鎖定。","subject":"帳號解鎖步驟"}},"omniauth_callbacks":{"failure":"無法從 %{kind} 驗證，因為 \"%{reason}\"。","success":"成功從 %{kind} 驗證。"},"passwords":{"edit":{"change_my_password":"更改我的密碼","change_your_password":"更改您的密碼","confirm_new_password":"確認新密碼","new_password":"新密碼"},"new":{"forgot_your_password":"忘記密碼？","send_me_reset_password_instructions":"請寄重設密碼的說明信件給我"},"no_token":"這是密碼重設頁面，僅能透過密碼重設信件進入。如果您是透過重設信件進入的，請確認您的網址是完整的。","send_instructions":"您將在幾分鐘後收到一封電子郵件，內有重新設定密碼的步驟說明。","send_paranoid_instructions":"如果我們有您的信箱，您將會收到一封內含可重新設定密碼連結的電子郵件。","updated":"您的密碼已被修改，您現在已經登入。","updated_not_active":"您的密碼已被修改。"},"registrations":{"destroyed":"再會！您的帳號已被取消。有緣再會。","edit":{"are_you_sure":"您確定嗎？","cancel_my_account":"取消我的帳戶","currently_waiting_confirmation_for_email":"等待 %{email} 的確認","leave_blank_if_you_don_t_want_to_change_it":"不想修改的話就不需要填寫這個欄位","title":"修改 %{resource}","unhappy":"不喜歡","update":"更新","we_need_your_current_password_to_confirm_your_changes":"我們需要您的目前的密碼以確認您的更改"},"new":{"sign_up":"註冊"},"signed_up":"註冊成功，歡迎！","signed_up_but_inactive":"您已註冊成功。然而因為您的帳號尚未啓動，暫時無法登入，抱歉！","signed_up_but_locked":"您已註冊成功。 然而因為您的帳號已被鎖定，暫時無法登入，抱歉！","signed_up_but_unconfirmed":"確認信件已送至您的 Email 信箱，請點擊信件內連結以啓動您的帳號。","update_needs_confirmation":"您已經成功的更新帳號資訊，但我們仍需確認您的電子信箱，請至新信箱收信並點擊連結以確認您的新電子郵件帳號。","updated":"您已經成功的更新帳號資訊。"},"sessions":{"already_signed_out":"成功登出了。","new":{"sign_in":"登入"},"signed_in":"成功登入了。","signed_out":"成功登出了。"},"shared":{"links":{"back":"返回","didn_t_receive_confirmation_instructions":"沒有收到確認信件？","didn_t_receive_unlock_instructions":"沒有收到解鎖信件？","forgot_your_password":"忘記密碼？","sign_in":"登入","sign_in_with_provider":"用 %{provider} 登入","sign_up":"註冊"}},"unlocks":{"new":{"resend_unlock_instructions":"重發解鎖說明信件"},"send_instructions":"您將在幾分鐘後收到一封電子郵件，內有將帳號解除鎖定的步驟說明。","send_paranoid_instructions":"如果您的帳號已存在，您的電子信箱將會收到如何解鎖帳號的指示。","unlocked":"您的帳號已被解鎖，現在已經登入。"}},"enums":{"admin":{"role":{"accounter":"會計帳號","content_manager":"內容管理員","not_signed_in":"無權限","owner":"網站擁有者","stock_manager":"庫存管理員","super":"高級管理員"}},"brand":null,"product":{"is_preorder":{"false":"否","null":"否","true":"是"}},"product/image":{"use_case":{"description":"敘述插圖","normal":"商品"}},"product/variant":null,"product_category":null,"site_config":null,"user":null,"user/collection":null,"user/shipping_info":null},"helpers":{"page_entries_info":{"entry":{"one":"entry","other":"entries","zero":"entries"},"more_pages":{"display_entries":"顯示 \u003cb\u003e%{total}\u003c/b\u003e 筆 %{entry_name} 中的第 \u003cb\u003e%{first}\u0026nbsp;-\u0026nbsp;%{last}\u003c/b\u003e 筆"},"one_page":{"display_entries":{"one":"顯示 \u003cb\u003e1\u003c/b\u003e 筆 %{entry_name}","other":"顯示 \u003cb\u003e全部 %{count}\u003c/b\u003e 筆 %{entry_name}","zero":"沒有任何 %{entry_name}"}}},"select":{"prompt":"請選擇"},"submit":{"create":"新增%{model}","submit":"儲存%{model}","update":"更新%{model}"}},"messages":{"admin_is_suspended":"管理員 %{name} 已停權","admin_is_unsuspended":"管理員 %{name} 已復權","confirmations":{"are_you_sure_want_to_continue":"確定要繼續嗎？","are_you_sure_want_to_delete_for":"您確定要刪除%{model}嗎？","please_confirm_your_operation_first":"請先確認您要進行的動作","this_action_can_not_retrieve":"這個動作將無法復原","you_will_suspend_this_admin":"您將會將此管理員停權，暫停帳號的功能。","you_will_unsuspend_this_admin":"您將會將此管理員復權，恢復帳號的功能。"},"error":{"jwt_token_been_modified":"您的身份憑證可能遭到竄改，請重新登入取得正確的憑證。"},"failure":{"cart_fetch_failure":"無法取得購物車","parameters_failure":"您提供的參數不符合規範","policy_validate_failure":"您的帳號並不能執行這個動作","token_authenticate_failure":"身份認證失敗，請嘗試重新登入","token_expired":"憑證已過期","validation_failure":"請您檢查表單後再試一次"},"help":{"click_for_update_logo":"點擊選擇新 LOGO","if_do_not_want_to_change_password_leave_empty":"若不變更密碼請留空","leave_empty_for_default_password":"不設定密碼將會使用預設密碼 `qwerasdf`","no_sub_category":"不設定子分類","please_make_words_count_about":"請盡量維持在 %{count} 字左右","please_re_enter_password_for_confirmation":"請再輸入一次密碼做為確認","please_select_a_brand":"請選擇一個品牌","please_select_a_category":"請選擇一個分類","please_select_a_picture":"請選擇一個圖檔","site_config_meta_description_should_not_over_140_words":"Google 建議不超過 140 字","site_config_meta_keywords_please_seprate_with_comma":"請以半形逗點分開，Google 建議不超過 3 個"},"product_management":{"help_message":{"meta_description":"預設會擷取部分商品描述的內容，這個設定可以讓您為商品撰寫更符合 SEO 需求的商品描述。google 建議維持在 150 字左右。","meta_keywords":"預設會使用系統設定中的關鍵字內容，您可以透過這個設定為每個商品設定專有的關鍵字。","meta_title":"預設會使用商品名稱作為頁面 \u003ctitle\u003e 的內容，這個設定可以讓您自訂內容。","name":"會呈現在線上商店中的商品名稱","option_types":"若商品擁有多種選項，請利用此功能來協助您產生需要的商品規格，例如：「顏色：紅、白；尺寸：Ｓ、Ｌ」，可自動產生 「紅-Ｓ，紅-Ｌ，白-Ｓ...」等商品規格供您獨立管理。若商品不需要提供選項則請留空。","price":"填 0 表示不指定。若售價為 0 時此商品為免費。若折扣價為 0 時表示此商品會以售價出售。","sku":"用於辨識商品的最小庫存單位編號"},"please_provide_basic_info_for_new_product_and_make_advence_config_in_next_step":"請先透過這個表單提供商品的基本資料，在建立好商品資料模型後您可以在下一個步驟進行更多設定。"},"resource_added_successfully":"%{resource}已成功新增","resource_updated_successfully":"%{resource}已成功更新","server_side_500_error":"抱歉，伺服器發生問題，請稍後再試","there_is_no_data_for_now":"目前沒有資料","there_is_no_sub_categories_for_now":"目前沒有子分類","this_column_is_optional":"此欄位為選填"},"page_titles":{"admin":{"admins":{"edit":"編輯管理員","index":"列表","main_title":"人員管理","new":"新增管理員","show":"詳細資料"},"brands":{"edit":"編輯品牌","index":"列表","main_title":"品牌管理","new":"新增品牌","show":"詳細資料"},"dashboard":{"main_title":"資訊面板","show":"網站狀態簡報","titles":{"basic_data_stat":"基本資料狀態"}},"login":{"subtitle":"本頁面僅限 Admin 帳號使用","title":"請先登入"},"product_categories":{"edit":"編輯分類","index":"列表","main_title":"商品分類管理","new":"新增分類","show":"詳細資料"},"products":{"basic_properties":"基本屬性","edit":"編輯商品","extra_properties":"額外自訂屬性","form":"商品表單","index":"列表","main_title":"商品管理","new":"新增商品","option_type_fields":"商品選項","property_fields":"商品屬性","show":"詳細資料"},"profile":{"main_title":"管理員個人檔案","show":"編輯"},"sidebar":{"general_info":"一般資訊","product_info":"商品資訊","sales_info":"銷售相關資訊","system_config":"系統管理"},"system_config":{"main_title":"系統設定","meta_tags_config":"網站 MetaTags 設定","seo_config":"SEO 選項設定","show":"選項列表","site_title_style":"網站標題樣式","style_preview":"樣式預覽"},"users":{"edit":"編輯會員","index":"列表","main_title":"會員管理","show":"詳細資料"}},"user":{"login":{"subtitle":"我們需要確認您的身份以提供個人化服務","title":"請先登入"},"profile":{"main_title":"管理個人資料"}}},"views":{"pagination":{"first":"\u0026laquo;","last":"\u0026raquo;","next":"\u0026rsaquo;","previous":"\u0026lsaquo;","truncate":"\u0026hellip;"}}});
