import { call, put, takeEvery, takeLatest } from "@redux-saga/core/effects";
import api from "../../api/contact";

function* addContact(action) {
  console.log("--sagas: add Contact --");
  console.log(action);

  try {
    const result = yield call(api.add, action.payload);
    console.log(result);

    yield put({
      type: "ADD_CONTACT_SUCCEEDED",
      payload: { id: result.data.id, ...action.payload },
    });
  } catch (e) {
    alert(e.message);
  }
}

function* fetchContactList(action) {
  console.log("--sagas: fetch Contactlist --");
  console.log(action);

  try {
    // 1. 서버에서 데이터 받아오기
    const result = yield call(api.fetch);
    console.log(result);
    // 2. 받아온 데이터로 state 변경
    yield put({ type: "FETCH_TODOLIST_SUCCEEDED", payload: result.data });
  } catch (e) {
    alert(e.message);
  }
}

function* removeContact(action) {
  console.log("--sagas: remove Contact --");
  console.log(action);

  try {
    // 1. 서버의 REST API를 호출함
    // action.payload == id
    // id: 데이터베이스의 PK, JPA 엔티티의 $Id
    const result = yield call(api.remove, action.payload);
    console.log(result);
    // 2. API호출이 완료되면 state를 변경함

    yield put({
      type: "REMOVE_CONTACT_SUCCEEDED",
      payload: action.payload,
    });
  } catch (e) {
    alert(e.message);
  }
}

function* modifyContact(action) {
  console.log("--sagas: modify Contact --");
  console.log(action);

  try {
    // 1. 서버의 REST API를 호출함
    // action.payload == {id, memo}
    const result = yield call(api.modify, action.payload);
    console.log(result);
    // result.data == {id, createdTime, memo}
    // 2. API호출이 완료되면 state를 변경함
    yield put({
      type: "MODIFY_CONTACT_SUCCEEDED",
      payload: result.data,
    });
  } catch (e) {
    alert(e.message);
  }
}

function* contactSaga() {
  yield takeEvery("ADD_CONTACT", addContact);
  yield takeEvery("REMOVE_CONTACT", removeContact);
  yield takeEvery("MODIFY_CONTACT", modifyContact);
  yield takeLatest("FETCH_CONTACT", fetchContactList);
}
export default contactSaga;
