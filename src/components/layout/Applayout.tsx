const Applayout = () => {
  return (
    <div className='flex'>
      <aside className='hidden lg:block w-64'>
        <div>side bar</div>
      </aside>
      <main className='flex-1'>Game Grid</main>
    </div>
  );
};

export default Applayout;
