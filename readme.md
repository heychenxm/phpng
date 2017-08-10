# HelloWorld

## 框架
- laravle 5.4
- bootstrap 3.3.7
- angularjs 1.6.4

## 微测考
**实现一个在线考试管理系统，主要用于个人联系项目**
### 需求描述
主要实现教师录入题目，或者从已有题库选择题目生成试卷，
通过选择考试，将试题权限分配给班级的学生（学生类型的用户）

### 功能
#### 用户登录
#### 录入题库
#### 进行考试

## 项目规范

### Controller
 - 所有的控制器命名为单数形式+`Controller`，例如`SidebarController`
 - Controller中的`index`方法统一用来返回对应的`view`，`all`方法获取所有的数据，`create`方法创建对象，`update`用来更新对象，`destroy`方法用来删除对象
 - Controller中返回的数据，`json`数据直接用`return`，`view`视图中的数据用`compact`
 - `create`方法放回相对应的创建的对象，`update`放回返回更新后的对象, `destroy`返回空
