import React from "react";

const Modal = (props) => {
  const {
    variant,
    status,
    onClick,
    title,
    description,
    setTitle,
    setDescription,
    statusList,
    setStatusList,
    add,
    data,
    edit,
    update,
    deleteList
  } = props;
  return (
    <>
      {status && (
        <div style={style.modal}>
          <div style={style.modalContent}>
            <span style={style.close} onClick={() => onClick(false)}>
              &times;
            </span>

            {variant === "DETAIL" && (
              <>
                <h2>Detail List</h2>
                <div style={style.detailContainer}>
                  <div style={style.inputContainer}>
                    <h3 style={style.label}>Title</h3>
                    {data.title}
                  </div>
                  <div style={style.inputContainer}>
                    <h3 style={style.label}>Description</h3>
                    {data.description}
                  </div>
                  <div style={style.inputContainer}>
                    <h3 style={style.label}>Status</h3>
                    {data.status === 0 ? "Belum Selesai" : "Selesai"}
                  </div>
                  <div style={style.inputContainer}>
                    <h3 style={style.label}>Created At</h3>
                    {data.createdAt}
                  </div>
                  <div style={style.footerDetail}>
                    <button style={style.button("lightGreen")} onClick={() => edit(data)}>
                      EDIT
                    </button>
                    <button style={style.button("pink")} onClick={() =>deleteList(data)}>HAPUS</button>
                  </div>
                </div>
              </>
            )}

            {variant === "EDIT" && (
              <>
                <div style={style.inputContainer}>
                  <h3 style={style.label}>Title</h3>
                  <input
                    style={style.input}
                    placeholder="Enter title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                <div style={style.inputContainer}>
                  <h3 style={style.label}>Description</h3>
                  <textarea
                    style={style.textarea}
                    placeholder="Enter description"
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                  >
                  </textarea>
                </div>
                <div style={style.inputContainer}>
                  <h3 style={style.label}>Status</h3>
                  <select style={style.selectOption} onChange={(e) => setStatusList(parseInt(e.target.value))}>
                    <option value={0} selected={statusList === 0 ? true : false}>Belum Selesai</option>
                    <option value={1} selected={statusList === 1 ? true : false}>Selesai</option>
                  </select>
                </div>
                

                <div style={style.inputContainer}>
                  <button
                    style={style.button("lightBlue")}
                    onClick={() => update()}
                  >
                    EDIT
                  </button>
                </div>
              </>
            )}

            {variant === "ADD" && (
              <>
                <div style={style.inputContainer}>
                  <h3 style={style.label}>Title</h3>
                  <input
                    style={style.input}
                    placeholder="Enter title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                <div style={style.inputContainer}>
                  <h3 style={style.label}>Description</h3>
                  <textarea
                    style={style.textarea}
                    placeholder="Enter description"
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                  >
                  </textarea>
                </div>
                <div style={style.inputContainer}>
                  <button
                    style={style.button("lightBlue")}
                    onClick={() => add()}
                  >
                    TAMBAH
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

const style = {
  modal: {
    position: "fixed",
    zIndex: 1,
    paddingTop: 100,
    left: 0,
    top: 0,
    width: "100%",
    height: "100%",
    overflow: "auto",
    backgroundColor: "rgba(0,0,0)",
    backgroundColor: "rgba(0,0,0,0.4)",
  },
  modalContent: {
    backgroundColor: "#fefefe",
    position: "relative",
    margin: "auto",
    padding: 20,
    borderWidth: 1,
    borderColor: "#888",
    width: "30%",
    display: "flex",
    flexDirection: "column",
    // alignItems : 'center'
  },
  close: {
    color: "#aaaaaa",
    right: 30,
    position: "absolute",
    fontSize: 28,
    fontWeight: "bold",
  },

  inputContainer: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },

  label: {
    fontSize: 20,
    marginBottom: 5,
    fontWeight: "500",
  },

  input: {
    borderRadius: 10,
    padding: 20,
    fontSize: 16,
    outline: "none",
    border: "1px solid #888",
  },
  textarea: {
    borderRadius: 10,
    padding: 20,
    fontSize: 16,
    height: 100,
    outline: "none",
    border: "1px solid #888",
  },
  button: (color) => ({
    marginTop: 25,
    borderRadius: 10,
    padding: 10,
    fontSize: 16,
    outline: "none",
    border: "1px solid #888",
    backgroundColor: color,
    fontWeight: "800",
  }),

  detailContainer: {
    //   padding : '10px 0px'
  },

  footerDetail: {
    display: "grid",
    gridGap: 10,
    gridTemplateColumns: "auto auto",
  },

  selectOption : {
    borderRadius: 10,
    padding: 20,
    fontSize: 16,
    outline: "none",
    backgroundColor: 'white'
  }
};

export default Modal;
