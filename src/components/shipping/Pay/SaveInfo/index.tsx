const SaveInfo = () => {
  return (
    <>
      <div className="mb-12">
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            className="form-checkbox focus:ring-black-900 checked:bg-black-900 h-6 w-6 "
          />
          <span className="ml-3">Save this information for next time</span>
        </label>
      </div>
    </>
  );
};

export default SaveInfo;
