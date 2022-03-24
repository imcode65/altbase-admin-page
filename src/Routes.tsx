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
import Users from 'pages/users/Index';
import UsersManage from 'pages/users/Manage';
import Cms from 'pages/cms/Index';
import CmsManage from 'pages/cms/Manage';

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
          </Route>
          <Route path='users' element={<Users />}>
            <Route path='manage' element={<UsersManage />} />
          </Route>
          <Route path='cms' element={<Cms />}>
            <Route path='manage' element={<CmsManage />} />
          </Route>
        </Route>
        <Route path='*' element={<Navigate to='admin' />} />
      </Routes>
    </FadeIn>
  );
};

export default AppRoutes;