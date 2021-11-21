import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import List from "../components/molecules/List";
import Modal from "../components/molecules/Modal";
import {
  createList,
  fetchInitList,
  listDetail,
} from "../redux/actions/userAction";
import currentDate from "../utils/date";

const Home = () => {
  const listReducers = useSelector((state) => state.listReducers);
  const dispatch = useDispatch();
  const [variant, setVariant] = useState("");
  const [modalStatus, setModalStatus] = useState(false);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState(0);
  const [createdAt, setCreatedAt] = useState(currentDate);

  useEffect(() => {
    dispatch(fetchInitList());
  }, [dispatch]);

  const createNewList = () => {
    const data = {
      id: parseInt(listReducers.listAll.length) + 1,
      title,
      description,
      status,
      createdAt,
    };

    const fixData = [...listReducers.listAll, data];

    dispatch(createList(fixData));

    setTitle("")
    setDescription("")
    setStatus(0)
    setCreatedAt(currentDate)
    setModalStatus(false);
  };

  const updateList = (data) => {
    // let check = listReducers.listAll.find(item => item.id === listReducers.listDetail.id);
    let tempData = listReducers.listAll;
    let index = listReducers.listAll.findIndex(item => item.id === listReducers.listDetail.id)
    tempData[index].title = title
    tempData[index].description = description
    tempData[index].status = status
    tempData[index].createdAt = createdAt

    dispatch(createList(tempData));

    setTitle("")
    setDescription("")
    setStatus(0)
    setCreatedAt(currentDate)
    setModalStatus(false)
  };

  const deleteList = (data) => {
    let tempData = listReducers.listAll;
    let index = listReducers.listAll.findIndex(item => item.id === listReducers.listDetail.id)

    tempData.splice(index, 1);

    dispatch(createList(tempData));

    setTitle("")
    setDescription("")
    setStatus(0)
    setCreatedAt(currentDate)
    setModalStatus(false)
}

  const openModalAdd = () => {
    setVariant("ADD");
    setModalStatus(true);
  };

  const showDetail = (data) => {
    setVariant("DETAIL");
    setModalStatus(true);
    dispatch(listDetail(data));
  };

  const openModalEdit = (data) => {
    setTitle(data.title);
    setDescription(data.description);
    setStatus(data.status);
    console.log("DATA", data.status)
    setCreatedAt(data.createdAt);
    setVariant("EDIT");
  };

  return (
    <div style={style.container}>
      <Modal
        variant={variant}
        status={modalStatus}
        onClick={(value) => setModalStatus(value)}
        title={title}
        setTitle={setTitle}
        description={description}
        setDescription={setDescription}
        statusList={status}
        setStatusList={setStatus}
        add={createNewList}
        data={listReducers.listDetail}
        edit={openModalEdit}
        update={updateList}
        deleteList={deleteList}
      />
      <List
        variant={"not_finished"}
        setVariant={setVariant}
        title={"Belum Selesai"}
        data={listReducers.listAll.filter((item) => item.status === 0)}
        onClick={(value) => showDetail(value)}
        clickAdd={openModalAdd}
      />
      <List
        variant={"finished"}
        title={"Selesai"}
        data={listReducers.listAll.filter((item) => item.status === 1)}
        onClick={(value) => showDetail(value)}
      />
    </div>
  );
};

const style = {
  container: {
    display: "flex",
    minHeight: "100%",
    padding: 50,
  },
};

export default Home;
