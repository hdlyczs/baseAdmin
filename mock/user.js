import { param2Obj } from './utils'

const tokens = {
  admin: {
    token: 'admin-token'
  },
  editor: {
    token: 'editor-token'
  }
}

const users = {
  'admin-token': {
    introduction: 'I am a super administrator',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Super Admin',
    menu: [
            {
                "name": "订单管理",
                "url":'/test',
                "icon":'123',
                "levels":0,
                "children": [
                    {
                        "name": "订单列表",
                        "url":'/test/order',
                        "icon":'123',
                        "levels":1,
                    },
                    {
                        "name": "生产管理",
                        "url":'/test/2',
                        "icon":'123',
                        "levels":1,
                        "children": [
                            {
                                "name": "生产列表",
                                "url":'/test/2/1',
                                "icon":'123',
                                "levels":2,
                            }                     
                        ]
                    },
                    {
                        "name": "退货管理",
                        "url":'/test/4',
                        "icon":'123',
                        "levels":1,
                    }
                ]
            }
          ]
  },
  'editor-token': {
    roles: ['editor'],
    introduction: 'I am an editor',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Normal Editor'
  }
}

export default {
  login: res => {
    const { username } = JSON.parse(res.body)
    const data = tokens[username]

    if (data) {
      return {
        code: 20000,
        data
      }
    }
    return {
      code: 60204,
      message: 'Account and password are incorrect.'
    }
  },
  getInfo: res => {
    const { token } = param2Obj(res.url)
    const info = users[token]

    if (info) {
      return {
        code: 20000,
        data: info
      }
    }
    return {
      code: 50008,
      message: 'Login failed, unable to get user details.'
    }
  },
  logout: () => {
    return {
      code: 20000,
      data: 'success'
    }
  }
}
