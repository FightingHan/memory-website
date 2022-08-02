import { useEffect, useState } from "react";
import Title from "../../components/title";
import { IUser, IUserList } from "../../interface/user";

function UserList() {
  const [userList, setUserList] = useState<IUserList>([]);
  const [tips, setTips] = useState("");
  useEffect(() => {
    fetch("http://localhost:5000/api/users/list")
      .then(res => res.json())
      .then((res: any) => {
        console.log("结果是---", res);
        setUserList(res.data);
      })
      .catch((err) => {
        setTips(err.message);
      });
  }, []);
  return (
    <div className="App">
      <Title title="用户列表"></Title>
      {userList.length > 0 ? (
        userList.map((user: IUser) => (
          <div key={user._id}>
            <span>用户名: {user.name} </span>
          </div>
        ))
      ) : (
        <div>暂无数据</div>
      )}
      <p>{tips}</p>
    </div>
  );
}

export default UserList;
