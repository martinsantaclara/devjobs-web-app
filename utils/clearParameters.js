export const clearParameters = (
    setTitle,
    setLocation,
    setFullTime,
    setChecked,
    setMirrorTitle,
    setMirrorLocation,
    setClear,
    pageBack,
    setPage
) => {
    setTitle('');
    setLocation('');
    setFullTime(false);
    setChecked(false);
    setMirrorTitle('');
    setMirrorLocation('');
    setClear(true);
    setPage(pageBack);
};
