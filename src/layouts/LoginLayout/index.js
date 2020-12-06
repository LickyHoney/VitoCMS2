/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import {
    TransitionGroup,
    CSSTransition
} from "react-transition-group";
// Import for the page assets...
/*import { index } from "../../config/pluginsInit";*/
import '../../assets/scss/style.scss';
import '../../assets/css/main-css.css';

// Import Custom components...
import { Loader, SideBarStyle1, NavBarStyle1, FooterStyle1, Lottie } from '../../components/vito';
import data1Json from "../../assets/images/small/lottie-bell";
import data2Json from "../../assets/images/small/lottie-mail";
//Import Dashboard
import Dashboard1 from '../../views/Dashboard/Dashboard1';
import Login from '../../views/Dashboard/Login';
import Dashboard2 from '../../views/Dashboard/Dashboard2'
import DashboardCms from '../../views/Dashboard/DashboardCms'

import Calender from '../../views/App/Calender';
import Chat from '../../views/App/Chat';
import TodoList from '../../views/App/Todo/ToDoList';
import ProjectManagement from '../../views/App/ProjectManagement';
import ProjectManagement1 from '../../views/App/ProjectManagement/ProjectBoard';

import TimeLine from '../../views/ExtraPages/TimeLine';
import InvoicePage from '../../views/ExtraPages/InvoicePage';
import BlankPage from '../../views/ExtraPages/BlankPage';
import Pricing from '../../views/ExtraPages/Pricing';
import PricingOne from '../../views/ExtraPages/PricingOne';
import FAQPage from '../../views/ExtraPages/FAQPage';

//Import form components

import FormElement from '../../views/FormElements/FormElement';
import FormValidation from '../../views/FormElements/FormValidation';
import FormRadio from '../../views/FormElements/FormRadio';
import FormCheckBox from '../../views/FormElements/FormCheckBox';
import FormSwitch from '../../views/FormElements/FormSwitch';


// Import for the Email App
import Inbox from '../../views/App/Email/Inbox';
import EmailCompose from '../../views/App/Email/EmailCompose';

import Alert from '../../views/elements/Alert';
import Buttons from '../../views/elements/Buttons';
import Cards from '../../views/elements/Cards';
import Colors from '../../views/elements/Colors';
import Badges from '../../views/elements/Badges';
import BreadCrumb from '../../views/elements/BreadCrumb';
import Tooltips from '../../views/elements/Tooltips';
import Carousel from '../../views/elements/Carousel';
import Grid from '../../views/elements/Grid';
import Images from '../../views/elements/Images';
import Listgroup from '../../views/elements/Listgroup';
import Media from '../../views/elements/Media';
import Modal from '../../views/elements/Modal';
import Pagination from '../../views/elements/Pagination';
import Popovers from '../../views/elements/Popovers';
import Progressbars from '../../views/elements/Progressbars';
import Tabs from '../../views/elements/Tabs';
import Typography from '../../views/elements/Typography';
import Video from '../../views/elements/Video';
import Notifications from '../../views/elements/Notifications';

import { Switch, Route, Link } from 'react-router-dom'

// Import for the Tables App
import BasicTable from '../../views/Tables/BasicTables';
import DataTable from '../../views/Tables/DataTables';
import EditableTable from '../../views/Tables/EditableTables';

// Import Chart Pages
import MorrisChart from '../../views/Charts/MorrisCharts';
import AmChart from '../../views/Charts/AmCharts';
import ApexChart from '../../views/Charts/ApexCharts';

// Import Icons Pages
import Dripicons from '../../views/Icons/Dripicons';
import FontAwesomeIcons from '../../views/Icons/FontAwesomeIcons';
/*import LineFontAwesomeIcon from '../../views/Icons/LineFontAwesomeIcon';*/
import Remixicon from '../../views/Icons/IconRemixicon';
import IconUnicons from '../../views/Icons/IconUnicons';

// Import JSON Data...
import sideBarItems from '../../fakeData/json/sideBar';
/*import Loading from "react-loading-bar";*/

// Import Map Pages
import GoogleMaps from '../../views/Maps/GoogleMaps';
import { Collapse } from "reactstrap";
import RightSideBar from '../../components/vito/rightSidebar'

// Import State Action
import { userActions } from '../../store/actions/authAction'

class Index extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoggedIn: true,
            items: [
                {
                    text: 'Dashboard',
                    href: '/dashboard1'
                },
                {
                    text: 'Home',
                    active: true
                }
            ],
            footerItems: [
                {
                    title: "Privacy Policy",
                    href: "/",
                },
                {
                    title: "Terms of Use",
                    href: "/",
                }
            ],
            searchItem: [
                {
                    name: 'Dashboard',
                    href: '/',
                    icon: 'ri-home-4-line pr-2'
                },
                {
                    name: 'Dashboard-1',
                    href: '/dashboard2',
                    icon: 'ri-home-3-line pr-2'

                },
                {
                    name: 'Chat',
                    href: '/chat',
                    icon: 'ri-message-line pr-2'

                },
                {
                    name: 'Calender',
                    href: '/calender',
                    icon: 'ri-calendar-2-line pr-2'

                },
                {
                    name: 'Profile',
                    href: '/dashboard',
                    icon: 'ri-profile-line pr-2'

                },
                {
                    name: 'Todo',
                    href: '/todo',
                    icon: 'ri-chat-check-line pr-2'

                },
                {
                    name: 'Email',
                    href: '/email/index',
                    icon: 'ri-mail-line pr-2'

                },
                {
                    name: 'Faq',
                    href: '/faq',
                    icon: 'ri-compasses-line pr-2'

                }
            ],
            topNavBar: [
                {
                    link: '/',
                    icon: 'ri-home-4-line'
                },
                {
                    link: '/chat',
                    icon: 'ri-chat-check-line'
                },
                {
                    link: '/todo',
                    icon: 'ri-question-answer-line'
                },
                {
                    link: '/email/index',
                    icon: 'ri-inbox-line'
                },
                {
                    link: '/calender',
                    icon: 'ri-file-list-line'
                },
                {
                    link: '/',
                    icon: 'ri-file-list-line'
                }

            ],

            footerTitle: "Copyright 2020 Vito All Rights Reserved.",
            collapsed: false
        }
    }
    componentDidMount() {
        /*index();*/
    }
    toggleNavbar = () => {
        this.setState({
            collapsed: !this.state.collapsed
        })
    };

    logoutAction = () => {
        userActions.logout()
    }

    render() {
        const { items, footerItems, footerTitle, collapsed } = this.state;
        const currentPath = this.props.location.pathname;

        return (
            <>
                {/* Loader component */}
                <Loader />
                <div className="wrapper">

                 

                    

                    <div id="content-page" className={"content-page"}>
                        <div className="container-fluid">
                            <TransitionGroup>
                                <CSSTransition
                                    key={this.props.location.key}
                                    classNames="dialog"
                                    timeout={300}
                                >
                                    <Switch location={this.props.location}>

                                        <Route path="/dashboard1" component={Dashboard1} />
                                        <Route path="/dashboard2" component={Dashboard2} />

                                        {/* Email App routes */}
                                        <Route path="/email/index" component={Inbox} />
                                        <Route path="/email/compose" component={EmailCompose} />
                                        <Route path="/chat" component={Chat} />
                                        <Route path="/calender" component={Calender} />
                                        <Route path="/todo" component={TodoList} />
                                        <Route path="/project-management" component={ProjectManagement} />
                                        <Route path="/project-management-demo" component={ProjectManagement1} />


                                        {/* UI elements routes */}
                                        <Route path="/alert" component={Alert} />
                                        <Route path="/cards" component={Cards} />
                                        <Route path="/buttons" component={Buttons} />
                                        <Route path="/colors" component={Colors} />
                                        <Route path="/badges" component={Badges} />
                                        <Route path="/breadCrumb" component={BreadCrumb} />
                                        <Route path="/tooltips" component={Tooltips} />
                                        <Route path="/carousel" component={Carousel} />
                                        <Route path="/video" component={Video} />
                                        <Route path="/grid" component={Grid} />
                                        <Route path="/images" component={Images} />
                                        <Route path="/list-group" component={Listgroup} />
                                        <Route path="/media" component={Media} />
                                        <Route path="/modal" component={Modal} />
                                        <Route path="/pagination" component={Pagination} />
                                        <Route path="/popovers" component={Popovers} />
                                        <Route path="/progress-bars" component={Progressbars} />
                                        <Route path="/tabs" component={Tabs} />
                                        <Route path="/typography" component={Typography} />
                                        <Route path="/notification" component={Notifications} />

                                        <Route path="/tables-basic" component={BasicTable} />
                                        <Route path="/tables-datatable" component={DataTable} />
                                        <Route path="/tables-editable" component={EditableTable} />

                                        <Route path="/chart-morris" component={MorrisChart} />
                                        <Route path="/chart-am" component={AmChart} />
                                        <Route path="/chart-apex" component={ApexChart} />

                                        {/* Form Elements */}
                                        <Route path={"/form"} component={FormElement} />
                                        <Route path={"/form-validation"} component={FormValidation} />
                                        <Route path={"/form-switch"} component={FormSwitch} />
                                        <Route path={"/form-radio"} component={FormRadio} />
                                        <Route path={"/form-checkbox"} component={FormCheckBox} />

                                        <Route path="/icon-dripicons" component={Dripicons} />
                                        <Route path="/icon-font-awesome" component={FontAwesomeIcons} />
                                        <Route path="/icon-line-awesome" component={FontAwesomeIcons} />
                                        <Route path={"/remixicon-icon"} component={Remixicon} />
                                        <Route path={"/unicons-icon"} component={IconUnicons} />

                                        <Route path="/map-google" component={GoogleMaps} />
                                        {/* Extra pages Routes */}
                                        <Route path="/timeline" component={TimeLine} />
                                        <Route path="/invoice" component={InvoicePage} />
                                        <Route path="/blank-page" component={BlankPage} />
                                        <Route path="/pricing" component={Pricing} />
                                        <Route path="/pricing-one" component={PricingOne} />
                                        <Route path="/faq" component={FAQPage} />
                                        <Route path="/DashboardCms" component={DashboardCms} />


                                        <Route path="/" exect component={Login} />
                                    </Switch>
                                </CSSTransition>
                            </TransitionGroup>
                        </div>
                    </div>

                </div>
              

                <FooterStyle1 footerNavList={footerItems} title={footerTitle} />
            </>
        );
    }
}

export default Index;
