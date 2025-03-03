export default function Input({ SerarchImg, setQuary }) {
  return (
    <div className="inpt-cont">
      <img width="19px" src={SerarchImg} />
      <input
        onChange={(e) => setQuary(e.target.value.toLocaleLowerCase())}
        type="text"
        placeholder="Search for a country..."
      />
    </div>
  )
}
