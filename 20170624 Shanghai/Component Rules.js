module.exports = {
    1: {
        title: '组件设计',
        field: `布局，接口，事件，行为 |
            state，props，render，events`
    },
    2: {
        title: '组件划分',
        field: `受控，非受控 ? [完全受控] |
            general，layout，navigation，data，feedback |
            细化 | 原子类 | Object`
    },
    3: {
        title: '组件应用',
        field: `扩展，混入，复用，继承 |
            组件通信，数据驱动`
    },
    4: {
        title: 'more',
        field: `高阶组件HOC |
            GLOBAL |
            设计概念`
    }
}


// 1: 组件的复用
// 2: 组件的继承（ extends Component | MyApp）
// 3: 组件的混入（ mixin, decorator | public, private）
// 4: 组件的细化程度

// 5: 组件内部 state props

5 +: 设计组件
布局: 原子类无布局信息, 复合组件定位
接口:
    I 组件本身属性 / 参数, 数据;
O 组件对外部事件开放的调用接口（ HOC） 组件的回调性接口；
// OO
//     Separate structure and skin（分离结构和主题）
//     Separate container and content（分离容器和内容）
// SMA
//     Categorizing CSS Rules（为css分类）
//     Naming Rules（命名规则）
//     Minimizing the Depth of Applicability（最小化适配深度）
Base
Layout（ Major Components）
Module（ Minor Components）
State
Theme

事件:
    行为:

    5++: 组件
state
props
render
events

// 5++ +: 受控, 非受控, 纯受控

// 12: select ? = tabs

// 7: HOC的概念
// 8: global的概念
// 9: general | layout | navigation | data | feedback
// 10: 组件间通信, 业务逻辑, 数据驱动


13: 设计上与Css相关的内容
less / sass
default variable
css extends