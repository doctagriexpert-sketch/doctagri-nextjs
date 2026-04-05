export async function POST(request) {
  try {
    const { texts, source = 'auto', target } = await request.json()

    if (!Array.isArray(texts) || texts.length === 0 || !target) {
      return Response.json({ error: 'Invalid request body.' }, { status: 400 })
    }

    const sourceLang = source === 'auto' ? 'fr' : source
    const translations = []

    for (const text of texts) {
      const url = new URL('https://api.mymemory.translated.net/get')
      url.searchParams.set('q', text)
      url.searchParams.set('langpair', `${sourceLang}|${target}`)

      const response = await fetch(url.toString())
      if (!response.ok) {
        const responseText = await response.text()
        console.error('MyMemory translate failed:', response.status, responseText)
        return Response.json({ error: 'Translation service error.' }, { status: 502 })
      }

      const data = await response.json()
      if (!data?.responseData?.translatedText) {
        console.error('MyMemory invalid response:', data)
        return Response.json({ error: 'Invalid translation response.' }, { status: 502 })
      }

      translations.push(data.responseData.translatedText)
    }

    return Response.json({ translations }, { status: 200 })
  } catch (error) {
    console.error('Translate API error:', error)
    return Response.json({ error: 'Unable to translate text at this time.' }, { status: 500 })
  }
}
