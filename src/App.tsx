export const App: React.FC = () => {
  return (
    <>
      <div className="flex flex-col w-[500px]">
        <div className="flex flex-col justify-center items-center p-4 bg-blue-300">
          <p className="pb-2 text-gray-700">TODOを入力</p>
          <form>
            <input type="text" className="rounded-md mb-6 w-80 outline-none" />
            <button className="ml-2 px-2 py-1 rounded-full text-sm text-gray-50 bg-gray-400">
              追加
            </button>
          </form>
        </div>
        <div className="flex flex-col p-4 bg-red-300 min-h-[200px]">
          <p className="pb-4 text-gray-700 text-center">未完了のTODOリスト</p>
          <ul className="flex flex-col pl-6">
            <li className="list-disc mb-4">
              <div className="flex">
                <p>未完了のTODO</p>
                <button className="ml-2 px-2 py-1 rounded-full text-sm text-gray-50 bg-gray-400">
                  完了
                </button>
                <button className="ml-2 px-2 py-1 rounded-full text-sm text-gray-50 bg-gray-400">
                  削除
                </button>
              </div>
            </li>
          </ul>
        </div>
        <div className="flex flex-col p-4 bg-green-300 min-h-[200px]">
          <p className="pb-4 text-gray-700 text-center">完了したTODO</p>
          <ul className="flex flex-col pl-6">
            <li className="list-disc mb-4">
              <div className="flex">
                <p>完了したTODO</p>
                <button className="ml-2 px-2 py-1 rounded-full text-sm text-gray-50 bg-gray-400">
                  戻す
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
