import { Platform } from 'react-native';

const regUser = 'send-money-for-reg-user';
const newUser = 'send-money-for-new-user';

const isWeb = Platform.OS === 'web';
const LOGO = isWeb ? '/' : 'HomePage';
const TRACK_MY_TRANSACTION = isWeb ? 'track-Transfer' : 'TrackTransfer';
const HOW_IT_WORKS = isWeb ? 'how-it-works' : 'HowItWorks';
const CONTACT = isWeb ? 'contact-us' : 'ContactUs';
const CHAT = isWeb ? 'chat' : 'Chat';
const FAQ = isWeb ? 'faq' : 'Faq';
const LOGIN = isWeb ? 'registration' : 'Registration';
const SIGN_UP = isWeb ? 'registration' : 'Registration';
const SEND_MONEY_REG_USER = isWeb ? regUser : 'SendMoneyForRegUser';
const SEND_MONEY_NEW_USER = isWeb ? newUser : 'SendMoneyForNewUser';
const PAY_BILLS = isWeb ? 'pay-bills' : 'PayBills';
const MY_TRANSACTIONS = isWeb ? 'my-transaction' : 'MyTransaction';
const RECIPENTS = isWeb ? 'my-recipients' : 'MyRecipientList';
const RECIPENT_REQUEST = isWeb ? 'my-recipients' : 'MyRecipientList';
const RECIPENT_REQUEST_NATIVE = isWeb ? 'my-recipients' : 'MyRecipientRequest';
const BILLERS = isWeb ? 'manage-billers' : 'ManageBiller';
const MY_BANK_ACCOUNTS = isWeb ? 'manage-my-account' : 'ManageMyAccounts';
const NOTIFICATION = isWeb ? 'all-notifications' : 'AllNotificationsPage';
const MY_REWARDS = isWeb ? 'my-rewards' : 'MyRewards';
const MY_PROFILE = isWeb ? 'profile' : 'MyProfile';
const UPLOAD_DOCUMENTS = isWeb ? 'upload-document' : 'UploadDocument';
const REFER_A_FRIEND = isWeb ? 'refer-friend' : 'ReferAFriend';
const CHANGE_PASSWORD = isWeb ? 'change-password' : 'ChangePassword';
const LOGOUT = isWeb ? 'logout' : 'Logout';

export {
  LOGO,
  TRACK_MY_TRANSACTION,
  HOW_IT_WORKS,
  CONTACT,
  CHAT,
  FAQ,
  LOGIN,
  SIGN_UP,
  RECIPENT_REQUEST_NATIVE,
  SEND_MONEY_NEW_USER,
  SEND_MONEY_REG_USER,
  PAY_BILLS,
  MY_TRANSACTIONS,
  RECIPENTS,
  RECIPENT_REQUEST,
  BILLERS,
  MY_BANK_ACCOUNTS,
  NOTIFICATION,
  MY_REWARDS,
  MY_PROFILE,
  UPLOAD_DOCUMENTS,
  REFER_A_FRIEND,
  CHANGE_PASSWORD,
  LOGOUT,
  isWeb
};
