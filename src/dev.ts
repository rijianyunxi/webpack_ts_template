interface Obj {
  name: string;
  age: number;
  habit: string;
  eat?: boolean;
}

let song: Obj = {
  name: "song",
  age: 24,
  habit: "eat",
  eat: true,
};

function sum<T>(m: T): string {
  return m.toString();
}

module.exports = {
  song,
  sum,
};
