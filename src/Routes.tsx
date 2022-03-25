import {
  Routes, Route, useLocation, Navigate, 
} from 'react-router-dom';
// Layout
import DefaultLayout from 'layout/DefaultLayout';
// Pages
import Dashboard from 'pages/Dashboard';
import Login from 'pages/Login';
import ForgotPassword from 'pages/ForgotPassword';
import SiteSettings from 'pages/SiteSettings';
import ApplicationSettings from 'pages/ApplicationSettings';
import EmailTemplate from 'pages/emailTemplate/Index';
import EmailTemplateManage from 'pages/emailTemplate/Manage';
import EmailTemplateEdit from 'pages/emailTemplate/Edit';
import EmailTemplateView from 'pages/emailTemplate/View';
import Cms from 'pages/cms/Index';
import CmsManage from 'pages/cms/Manage';
import CmsEdit from 'pages/cms/Edit';
import CmsView from 'pages/cms/View';
import Users from 'pages/users/Index';
import UsersManage from 'pages/users/Manage';
import UsersAdd from 'pages/users/Add';
import UsersEdit from 'pages/users/Edit';
import UsersView from 'pages/users/View';
import CoinCategory from 'pages/coinCategory/Index';
import CoinCategoryManage from 'pages/coinCategory/Manage';
import CoinCategoryEdit from 'pages/coinCategory/Edit';
import Coins from 'pages/coins/Index';
import CoinsManage from 'pages/coins/Manage';
import CoinsAdd from 'pages/coins/Add';
import CoinsEdit from 'pages/coins/Edit';
import CoinsView from 'pages/coins/View';
import CoinNews from 'pages/coinNews/Index';
import CoinNewsManage from 'pages/coinNews/Manage';
import CoinNewsAdd from 'pages/coinNews/Add';
import CoinNewsEdit from 'pages/coinNews/Edit';
import CoinNewsView from 'pages/coinNews/View';
import Notifications from 'pages/Notifications';
import Tx from 'pages/transactionHistory/Index';
import TxBuyBnbLayout from 'pages/transactionHistory/buyBnb/Layout';
import TxBuyBnbIndex from 'pages/transactionHistory/buyBnb/Index';
import TxBuyBnbDetails from 'pages/transactionHistory/buyBnb/Details';

import { fadeIn } from 'react-animations';
import styled, { keyframes } from 'styled-components';

const AppRoutes = () => {
  const location = useLocation();
  const FadeIn = styled.div`
    // animation: 1.5s ${keyframes`${fadeIn}`} ;
  `;
  return (
    <FadeIn>
      <Routes location={location}>
        <Route path='login' element={<Login />} />
        <Route path='forgot-password' element={<ForgotPassword />} />
        <Route path='admin' element={<DefaultLayout />}>
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='site-settings' element={<SiteSettings />} />
          <Route path='application-settings' element={<ApplicationSettings />} />
          <Route path='' element={<Navigate to='dashboard' />} />
          <Route path='email-template' element={<EmailTemplate />}>
            <Route path='manage' element={<EmailTemplateManage />} />
            <Route path='edit/:id' element={<EmailTemplateEdit />} />
            <Route path='view/:id' element={<EmailTemplateView />} />
          </Route>
          <Route path='cms' element={<Cms />}>
            <Route path='manage' element={<CmsManage />} />
            <Route path='edit/:id' element={<CmsEdit />} />
            <Route path='view/:id' element={<CmsView />} />
          </Route>
          <Route path='users' element={<Users />}>
            <Route path='manage' element={<UsersManage />} />
            <Route path='add' element={<UsersAdd />} />
            <Route path='edit/:id' element={<UsersEdit />} />
            <Route path='view/:id' element={<UsersView />} />
          </Route>
          <Route path='coin-category' element={<CoinCategory />}>
            <Route path='manage' element={<CoinCategoryManage />} />
            <Route path='edit/:id' element={<CoinCategoryEdit />} />
          </Route>
          <Route path='coins' element={<Coins />}>
            <Route path='manage' element={<CoinsManage />} />
            <Route path='add' element={<CoinsAdd />} />
            <Route path='edit/:id' element={<CoinsEdit />} />
            <Route path='view/:id' element={<CoinsView />} />
          </Route>
          <Route path='coin-news' element={<CoinNews />}>
            <Route path='manage' element={<CoinNewsManage />} />
            <Route path='add' element={<CoinNewsAdd />} />
            <Route path='edit/:id' element={<CoinNewsEdit />} />
            <Route path='view/:id' element={<CoinNewsView />} />
          </Route>
          <Route path='in-app-notification' element={<Notifications />} />
          <Route path='transaction-history' element={<Tx />}>
            <Route path='buy-bnb' element={<TxBuyBnbLayout />}>
              <Route path='' element={<TxBuyBnbIndex />} />
              <Route path='details/:id' element={<TxBuyBnbDetails />} />
            </Route>
            <Route path='' element={<Navigate to='buy-bnb' />} />
            <Route path='*' element={<Navigate to='' />} />
          </Route>
        </Route>
        <Route path='*' element={<Navigate to='admin' />} />
      </Routes>
    </FadeIn>
  );
};

export default AppRoutes;