// ** Icon imports
import Login from 'mdi-material-ui/Login'

// import Table from 'mdi-material-ui/Table'
// import CubeOutline from 'mdi-material-ui/CubeOutline'
import HomeOutline from 'mdi-material-ui/HomeOutline'

// import FormatLetterCase from 'mdi-material-ui/FormatLetterCase'
import AccountCogOutline from 'mdi-material-ui/AccountCogOutline'

// import CreditCardOutline from 'mdi-material-ui/CreditCardOutline'
import AccountPlusOutline from 'mdi-material-ui/AccountPlusOutline'
import AlertCircleOutline from 'mdi-material-ui/AlertCircleOutline'

// import GoogleCirclesExtended from 'mdi-material-ui/GoogleCirclesExtended'
import Cookies from 'universal-cookie';

// ** Type import
import { VerticalNavItemsType } from 'src/@core/layouts/types'

const navigation = (): VerticalNavItemsType => {
  const cookies = new Cookies();
  const session_token = cookies.get('session_token')
  const user_type = cookies.get('user_type')

  if(session_token && user_type=="AGENT"){
    return[
      {
        title:'Dashboard',
        icon:HomeOutline,
        path:'/'
      },
      {
        title:'Account Settings',
        icon:HomeOutline,
        path:'/account-settings'
      },
      {
        sectionTitle: 'Pages'
      },
      {
        icon: AccountCogOutline,
        title: 'Create Vendor',
        path: '/createvendors'
      },
      {
        icon:AccountCogOutline,
        title: 'Vendor List',
        path:'/vendorlist'
      },
      {
        title:'Logout',
        icon:AccountCogOutline,
        path:'/logout'
      },
    ]

  }else if(session_token && user_type === "ADMIN"){
    return[
      {
        title:'Dashboard',
        icon:HomeOutline,
        path:'/'
      },
      {
        title:'Account Settings',
        icon:HomeOutline,
        path:'/account-settings'
      },
      
      {
        sectionTitle: 'Pages'
      },
    {
      icon: AccountCogOutline,
      title: 'Create TeamLeaders',
      path: '/createteamleaders'
    },
    {
      icon:AccountCogOutline,
      title: 'Teamleader List',
      path:'/teamleaderlist'
    },
    {
      title:'Logout',
      icon:AccountCogOutline,
      path:'/logout'
    },
    {
      title: 'Error',
      icon: AlertCircleOutline,
      path: '/pages/error',
      openInNewTab: true
    }
  ] 
  }else if(session_token && user_type === "TEAM_LEADER"){
    return[
      {
        title:'Dashboard',
        icon:HomeOutline,
        path:'/'
      },
      {
        title:'Account Settings',
        icon:HomeOutline,
        path:'/account-settings'
      },
      
      {
        sectionTitle: 'Pages'
      },
      {
      icon: AccountCogOutline,
      title: 'Create Agent',
      path: '/createagent'

    },
    {
      icon: AccountCogOutline,
      title: 'Agent List',
      path: '/agentslist'
    },
    {
      title:'Logout',
      icon:AccountCogOutline,
      path:'/logout'
    },
  ]
  }
  else{
    return  [
    {
      title: 'Login',
      icon: Login,
      path: '/pages/login',
      openInNewTab: true
    },
    {
      title: 'Register',
      icon: AccountPlusOutline,
      path: '/pages/register',
      openInNewTab: true
    },
    
  ]
  }

  // return [
  //   {
  //     title: 'Dashboard',
  //     icon: HomeOutline,
  //     path: '/'
  //   },
  //   {
  //     title: 'Account Settings',
  //     icon: AccountCogOutline,
  //     path: '/account-settings'
  //   },
  //   {
  //     sectionTitle: 'Pages'
  //   },
  //   {
  //     title: 'Login',
  //     icon: Login,
  //     path: '/pages/login',
  //     openInNewTab: true
  //   },
  //   {
  //     title: 'Register',
  //     icon: AccountPlusOutline,
  //     path: '/pages/register',
  //     openInNewTab: true
  //   },
  //   {
  //     title: 'Error',
  //     icon: AlertCircleOutline,
  //     path: '/pages/error',
  //     openInNewTab: true
  //   },
  //   {
  //     sectionTitle: 'User Interface'
  //   },
  //   {
  //     title: 'Typography',
  //     icon: FormatLetterCase,
  //     path: '/typography'
  //   },
  //   {
  //     title: 'Icons',
  //     path: '/icons',
  //     icon: GoogleCirclesExtended
  //   },
  //   {
  //     title: 'Cards',
  //     icon: CreditCardOutline,
  //     path: '/cards'
  //   },
  //   {
  //     title: 'Tables',
  //     icon: Table,
  //     path: '/tables'
  //   },
  //   {
  //     icon: CubeOutline,
  //     title: 'Form Layouts',
  //     path: '/form-layouts'
  //   }
  // ]
}

export default navigation
