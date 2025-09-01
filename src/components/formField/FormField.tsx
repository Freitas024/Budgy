export default function FormField({textLabel, type, placeholder}:{textLabel: string, type: string, placeholder: string}){
  return(
    <main>
      <label className="block text-lg font-medium text-gray-700 mb-2">{textLabel}</label>
      <input className="w-full px-4 py-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent" type={type} placeholder={placeholder}/>
    </main>
  )
}