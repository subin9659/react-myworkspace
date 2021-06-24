import { call, put, takeEvery, takeLatest } from "@redux-saga/core/effects";
import api from "../../api/fitness";

function* addContact(action) {
  console.log("--sagas: add Fitness --");
  console.log(action);

  try {
    const result = yield call(api.add, action.payload);
    console.log(result);

    yield put({
      type: "ADD_FITNESS_SUCCEEDED",
      payload: { id: result.data.id, ...action.payload },
    });
  } catch (e) {
    alert(e.message);
  }
}

function* fetchFitnessList(action) {
  console.log("--sagas: fetch Fitnesslist --");
  console.log(action);

  try {
    // 1. 서버에서 데이터 받아오기
    const result = yield call(api.fetch);
    console.log(result);
    // 2. 받아온 데이터로 state 변경
    yield put({ type: "FETCH_FITNESSLIST_SUCCEEDED", payload: result.data });
  } catch (e) {
    alert(e.message);
  }
}

function* removeFitness(action) {
  console.log("--sagas: remove Fitness --");
  console.log(action);

  try {
    // 1. 서버의 REST API를 호출함
    // action.payload == id
    // id: 데이터베이스의 PK, JPA 엔티티의 $Id
    const result = yield call(api.remove, action.payload);
    console.log(result);
    // 2. API호출이 완료되면 state를 변경함

    yield put({
      type: "REMOVE_FITNESS_SUCCEEDED",
      payload: action.payload,
    });
  } catch (e) {
    alert(e.message);
  }
}

function* modifyFitness(action) {
  console.log("--sagas: modify Fitness --");
  console.log(action);

  try {
    // 1. 서버의 REST API를 호출함
    // action.payload == {id, memo}
    const result = yield call(api.modify, action.payload);
    console.log(result);
    // result.data == {id, createdTime, memo}
    // 2. API호출이 완료되면 state를 변경함
    yield put({
      type: "MODIFY_FITNESS_SUCCEEDED",
      payload: result.data,
    });
  } catch (e) {
    alert(e.message);
  }
}

function* fitnessSaga() {
  yield takeEvery("ADD_FITNESS", addContact);
  yield takeEvery("REMOVE_FITNESS", removeFitness);
  yield takeEvery("MODIFY_FITNESS", modifyFitness);
  yield takeLatest("FETCH_FITNESS", fetchFitnessList);
}
export default fitnessSaga;
