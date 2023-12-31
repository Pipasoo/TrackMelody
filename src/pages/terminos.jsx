import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../componentes/logo.png';
import { Button, Nav, Navbar, NavLink, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Terminos() {
    return (
        <>
            <header>
                <Navbar className='navBar' expand="lg">
                    <div className="container-fluid">
                        <Navbar.Brand>
                            <Link to="/">
                                <img className='logo' src={logo} alt="Logo" />
                            </Link>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarSupportedContent" />
                        <Navbar.Collapse id="navbarSupportedContent">
                            <Nav className="me-auto mb-2 mb-lg-0">
                                <NavLink href="/inicio"><font color="white">Inicio</font></NavLink>
                                <NavLink href="/premium"><font color="white">Premium</font></NavLink>
                            </Nav>
                            <Button variant='light' href="/registro">Registro</Button>
                            <Button variant="dark" href='/login'>Iniciar sesión</Button>
                        </Navbar.Collapse>
                    </div>
                </Navbar>
            </header>
            <div id="__next" data-reactroot="">
                <div className="plain-format light-container" role="main">
                    <h1>Términos y Condiciones de uso de TrackMelody</h1>
                    <h2>1. Introducción</h2>
                    <p>Lea detenidamente los presentes Términos y Condiciones de uso (en lo sucesivo, los
                        &lt;&lt;<strong>términos</strong>&gt;&gt;) que rigen el uso que usted haga de los servicios personalizados de
                        TrackMelody (que incluyen el acceso a los mismos) para la transmisión de música y otros contenidos, incluidos
                        todos nuestros sitios web y aplicaciones de software que incorporan o enlazan con los presentes Términos
                        (conjuntamente, el &lt;&lt;<strong>servicio de TrackMelody</strong>&gt;&gt;) y cualquier música, vídeo, podcast
                        u otro material que se ponga a disposición a través del Servicio de TrackMelody (en lo sucesivo, el
                        &lt;&lt;<strong>contenido</strong>&gt;&gt;).</p>
                    <p>El uso del Servicio de TrackMelody podrá estar sujeto a términos y condiciones adicionales que establezca
                        TrackMelody, los cuales se incorporan a los presentes Términos mediante la presente referencia.</p>
                    <p>Al suscribirse al Servicio de TrackMelody, o al utilizarlo de cualquier otro modo, usted acepta los presentes
                        Términos. Si no acepta los presentes Términos, no deberá utilizar el Servicio de TrackMelody ni acceder a ningún
                        Contenido.</p>
                    <p>Los presentes Términos se establecen entre usted y TrackMelody AB, Regeringsgatan 19, 111 53, Estocolmo,
                        Suecia.</p>
                    <h2>Requisitos de edad y elegibilidad</h2>
                    <p>Para poder utilizar el Servicio de TrackMelody y acceder a cualquier Contenido, deberá (1) tener 13 años de
                        edad (o la edad mínima equivalente en su país de origen) o más, (2) contar con el consentimiento de sus padres o
                        de su tutor legal si es menor de edad en su país de origen; (3) estar facultado para celebrar un contrato
                        vinculante con nosotros y no estar impedido para ello en virtud de la legislación aplicable, y (4) residir en un
                        país en el que el Servicio esté disponible. Asimismo, garantiza que toda la información de registro que envíe a
                        TrackMelody es veraz, precisa y completa, y se compromete a mantenerla así en todo momento Si es menor de edad
                        en su país de origen, su padre, madre o tutor legal deberá aceptar los presentes Términos en su nombre. Durante
                        el proceso de registro podrá encontrar información adicional sobre los requisitos de edad mínima. Si no cumple
                        los requisitos de edad mínima, TrackMelody no podrá registrarle como usuario.</p>
                    <h2>2. El Servicio de TrackMelody que proporcionamos</h2>
                    <h2>Opciones del Servicio de TrackMelody</h2>
                    <p>Ofrecemos numerosas opciones de Servicio de TrackMelody. Algunas opciones del Servicio de TrackMelody se
                        ofrecen de forma gratuita, mientras que otras opciones requieren un pago para poder acceder a las mismas (en lo
                        sucesivo, las &lt;&gt;). También podemos ofrecer planes promocionales especiales, afiliaciones o servicios,
                        incluyendo ofertas de productos y servicios de terceros. No somos responsables de los productos y servicios
                        proporcionados por dichos terceros.</p>
                    <p>El Servicio ilimitado puede no estar disponible para todos los usuarios. En el momento de la suscripción a los
                        servicios, le explicaremos qué servicios están disponibles para usted. Si cancela su suscripción al Servicio
                        ilimitado, o si su suscripción a dicho Servicio se interrumpe —por ejemplo, si cambia sus datos de pago—, es
                        posible que no pueda volver a suscribirse al Servicio ilimitado. Tenga en cuenta que el Servicio ilimitado puede
                        dejar de funcionar en el futuro, en cuyo caso ya no se le cobrará por el Servicio.</p>
                    <h2>Aplicaciones, dispositivos y software de código abierto de terceros</h2>
                    <p>El Servicio de TrackMelody podrá integrarse o interactuar de otro modo con aplicaciones, sitios web y servicios
                        de terceros (en lo sucesivo, las &lt;&gt;), así como con y ordenadores personales, teléfonos móviles, tabletas,
                        dispositivos portátiles, altavoces y otros dispositivos (los &lt;&gt;). El uso que usted haga de dichas
                        Aplicaciones de terceros y de los Dispositivos podrá estar sujeto a los términos, condiciones y políticas
                        adicionales que le facilite el tercero en cuestión. TrackMelody no garantiza que las Aplicaciones de terceros y
                        los Dispositivos sean compatibles con el Servicio de TrackMelody.</p>
                    <h2>Limitaciones y modificaciones del Servicio</h2>
                    <p>Ponemos el máximo cuidado y esfuerzo para mantener el Servicio de TrackMelody en funcionamiento y
                        proporcionarle una experiencia de audio personalizada e inmersiva. No obstante, nuestra oferta de servicios y su
                        disponibilidad podrán variar ocasionalmente, de conformidad con la legislación aplicable, sin que ello suponga
                        responsabilidad alguna para usted, como por ejemplo:</p>
                    <ul>
                        <li>Los Servicios de TrackMelody podrán sufrir interrupciones temporales debidas a dificultades técnicas, a la
                            realización de tareas de mantenimiento o pruebas, o a actualizaciones, incluidas aquellas necesarias para
                            reflejar los cambios en las leyes y requisitos normativos pertinentes.</li>
                        <li>Nuestro objetivo es evolucionar y mejorar nuestros Servicios constantemente, y podremos modificar, suspender
                            o dejar de prestar, de forma permanente o temporal, la totalidad o parte del Servicio de TrackMelody,
                            incluyendo determinadas funciones, prestaciones, planes de suscripción y ofertas promocionales.</li>
                        <li>TrackMelody no tiene ninguna obligación de proporcionar ningún contenido específico a través del Servicio de
                            TrackMelody, y TrackMelody o los propietarios correspondientes podrán retirar determinadas canciones, vídeos,
                            podcasts y otros Contenidos sin previo aviso.</li>
                    </ul>
                    <p>En el caso de que hubiera abonado directamente a TrackMelody las cuotas de una Suscripción de pago que
                        TrackMelody suspenda antes de que finalice su Periodo de prepago, tal y como se define dicho término en la
                        cláusula de Pagos y cancelaciones que figura a continuación, TrackMelody le reembolsará las cuotas prepagadas
                        correspondientes al Periodo de prepago relativas a la parte no utilizada de su Suscripción de pago vigente en
                        ese momento tras dicha suspensión. Para poder efectuar el reembolso, su cuenta y sus datos de facturación
                        deberán estar actualizados.</p>
                    <p>TrackMelody no tendrá ninguna responsabilidad frente a usted, ni ninguna obligación de reembolsarle, en
                        relación con las interrupciones o fallos de Internet o de otros servicios causados por acciones de las
                        autoridades gubernamentales, de otros terceros o por acontecimientos que escapen a nuestro control.</p>
                    <h2>3. Uso del Servicio de TrackMelody</h2>
                    <h2>Crear una cuenta de TrackMelody</h2>
                    <p>Para utilizar la totalidad o parte del Servicio de TrackMelody, es posible que tenga que crear una cuenta de
                        TrackMelody. Su nombre de usuario y su contraseña son exclusivamente para su uso personal y deberán ser
                        confidenciales. Reconoce que es responsable de todo uso de su nombre de usuario y contraseña, incluido cualquier
                        uso no autorizado. Notifique inmediatamente a nuestro equipo de Atención al Cliente si pierde o le roban su
                        nombre de usuario o contraseña, o si cree que se ha producido un acceso no autorizado a su cuenta.</p>
                    <p>TrackMelody podrá reclamar o exigirle que cambie su nombre de usuario por cualquier motivo.</p>
                    <h2>Sus derechos de uso del Servicio de TrackMelody</h2>
                    <p>Acceso a los Servicios de TrackMelody</p>
                    <p>Con sujeción al cumplimiento por su parte de los presentes Términos, incluidos cuantos términos y condiciones
                        resulten de aplicación, le otorgamos un permiso limitado, no exclusivo y revocable para hacer un uso personal y
                        no comercial del Servicio de TrackMelody y del Contenido (conjuntamente, el &lt;&gt;). Este Acceso permanecerá
                        en vigor hasta que usted o TrackMelody lo rescindan. Acepta y se compromete a no redistribuir ni transferir el
                        Servicio de TrackMelody ni el Contenido.</p>
                    <p>Las aplicaciones de software de TrackMelody y el Contenido se conceden bajo licencia, no son objeto de venta ni
                        de transferencia, y TrackMelody y sus licenciantes conservan la propiedad de todas las copias de las
                        aplicaciones de software de TrackMelody y del Contenido, incluso después de su instalación en sus Dispositivos.
                    </p>
                    <p>Derechos de propiedad de TrackMelody</p>
                    <p>El Servicio de TrackMelody y el Contenido son propiedad de TrackMelody o de sus licenciantes. Todas las marcas
                        comerciales, marcas de servicio, nombres comerciales, logotipos, nombres de dominio y cualquier otra
                        característica de la marca TrackMelody (&lt;&lt;características de la marca TrackMelody&gt;&gt;) son propiedad
                        exclusiva de TrackMelody o de sus licenciantes. Los presentes Términos no le otorgan ningún derecho de uso de
                        las Características de la marca TrackMelody, con fines comerciales o no comerciales.</p>
                    <h2>Pagos y cancelación</h2>
                    <h3>Facturación</h3>
                    <p>Puede adquirir una Suscripción de pago directamente a TrackMelody o a través de un tercero, ya sea mediante:
                    </p>
                    <ul>
                        <li>el pago por adelantado de una cuota de suscripción mensual o de cualquier otro plazo periódico que se le
                            comunique antes de la compra; o</li>
                        <li>el prepago que le da acceso al Servicio de TrackMelody durante un periodo de tiempo específico (en lo
                            sucesivo, el &lt;&lt;<strong>periodo de prepago</strong>&gt;&gt;).</li>
                    </ul>
                    <p>Los tipos impositivos se calculan en función de la información que usted proporcione y del tipo aplicable en el
                        momento de su cargo mensual.</p>
                    <p>Cambios de precios e impuestos</p>
                    <p>TrackMelody podrá modificar ocasionalmente el precio de las Suscripciones de pago, incluidas las cuotas de
                        suscripción periódicas, el Periodo de prepago, para los periodos aún no pagados, o los Códigos, definidos
                        anteriormente, y le comunicará cualquier cambio de precio con la debida antelación. Los cambios de precio
                        entrarán en vigor al inicio del siguiente periodo de suscripción que siga a la fecha del cambio de precio. Con
                        arreglo a la legislación aplicable, si sigue utilizando el Servicio de TrackMelody una vez que el cambio de
                        precio entre en vigor, se entenderá que ha aceptado el nuevo precio. Si no está de acuerdo con un cambio de
                        precio, podrá rechazar dicho cambio dándose de baja de la Suscripción de pago correspondiente antes de que el
                        cambio de precio entre en vigor.</p>
                    <p>Los tipos impositivos se basan en los tipos aplicables en el momento de su cobro mensual. Estos importes podrán
                        cambiar con el tiempo en función de los requisitos fiscales locales de su país, estado, territorio o incluso
                        ciudad. Cualquier cambio en el tipo impositivo se aplicará automáticamente en función de la información de la
                        cuenta que proporcione.</p>
                    <h3>Renovación y cancelación</h3>
                    <p>Con la excepción de las Suscripciones de pago de un Periodo de prepago, su pago a TrackMelody o al tercero a
                        través del cual adquirió la Suscripción de pago se renovará automáticamente al final del periodo de suscripción
                        aplicable, a menos que cancele su Suscripción de pago antes de que finalice el periodo de suscripción en curso.
                        Póngase en contacto con nuestro equipo de Atención al Cliente aquí para obtener instrucciones sobre cómo
                        proceder a la cancelación. La cancelación entrará en vigor el día siguiente al último día del periodo de
                        suscripción actual, y se le cambiará a la versión gratuita del Servicio de TrackMelody. No proporcionamos
                        reembolsos ni créditos por ningún periodo de suscripción parcial, salvo que se indique expresamente en los
                        presentes Términos.</p>
                    <p>Si ha adquirido una Suscripción de pago utilizando un Código, su suscripción terminará automáticamente al final
                        del periodo indicado en el Código, o cuando no tenga un saldo prepagado suficiente para pagar el Servicio de
                        TrackMelody.</p>
                    <p>Derecho de desistimiento</p>
                    <p>Si se suscribe a una Prueba, acepta que el derecho de desistimiento de la Suscripción de pago por la que recibe
                        una Prueba finaliza catorce (14) días después de iniciar la Prueba. Si no cancela la Suscripción de pago antes
                        de que finalice la Prueba, perderá su derecho de desistimiento y autorizará a TrackMelody a cobrarle
                        automáticamente el precio acordado cada mes hasta que cancele la Suscripción de pago. En el caso de pruebas
                        inferiores a catorce (14) días, usted consiente expresamente que le proporcionemos el servicio de pago
                        inmediatamente después de que finalice su Prueba y que a partir de ese momento pierda su derecho de
                        desistimiento.</p>
                    <p>Si adquiere una Suscripción de pago sin Prueba, acepta que tiene catorce (14) días después de su compra para
                        desistir por cualquier motivo y deberá pagarnos los servicios prestados hasta el momento en que nos comunique
                        que ha cambiado de opinión. . Consiente expresamente la prestación del servicio inmediatamente después de su
                        compra, la pérdida del derecho de desistimiento y autoriza a TrackMelody a cobrarle automáticamente cada mes
                        hasta que se dé de baja.</p>
                    <h2>Directrices del usuario</h2>
                    <p>Hemos adoptado unas directrices para el uso del Servicio de TrackMelody, destinadas a garantizar que dicho
                        Servicio siga siendo agradable para todos (en lo sucesivo, las &lt;&gt;). Al utilizar el Servicio de
                        TrackMelody, deberá cumplir las Directrices del usuario de TrackMelody, así como todas las leyes, normas y
                        normativas aplicables, y respetar la propiedad intelectual, la privacidad y otros derechos de terceros.</p>
                    <h2>Cuentas de marca</h2>
                    <p>Si crea una cuenta de TrackMelody en nombre de una empresa, organización, entidad o marca (en lo sucesivo, una
                        &lt;&gt; y dicha cuenta una &lt;&gt;), los términos &lt;&gt; y &lt;&lt;su(s)&gt;&gt;, tal y como se utilizan en
                        los presentes Términos, incluidos otros términos y condiciones de TrackMelody incorporados por referencia en
                        este documento, se aplicarán tanto a usted como a la Marca.</p>
                    <p>Si crea una Cuenta de marca, declara y garantiza que tiene autorización para conceder todos los permisos y
                        licencias previstos en los presentes Términos, incluidos cuantos términos y condiciones de TrackMelody que
                        resulten de aplicación, y para vincular la Marca a los presentes Términos.</p>
                    <p>Una Marca podrá realizar un seguimiento de usuarios y crear y compartir listas de reproducción, siempre y
                        cuando la Marca no realice ninguna acción que implique un respaldo o relación comercial entre la Marca y el
                        usuario, artista, compositor o cualquier otra persona a la que se siga, a menos que la Marca haya obtenido de
                        forma independiente los derechos necesarios para incluir dicho respaldo. Además, las Marcas deben ser
                        transparentes con nuestros usuarios a la hora de revelar cualquier respaldo o contraprestación proporcionada a
                        los artistas, compositores, usuarios o cualquier otra parte, y deberán cumplir todas las leyes, normativas y
                        códigos de prácticas aplicables al llevar a cabo las prácticas anteriores.</p>
                    <h2>Control de exportaciones y sanciones</h2>
                    <p>Los productos de TrackMelody pueden estar sujetos a las leyes y normativas de control de la exportación y
                        reexportación de Estados Unidos o a leyes similares aplicables en otras jurisdicciones, incluidas las Normas de
                        Administración de Exportaciones (&lt;&gt;) aplicadas por el Departamento de Comercio de Estados Unidos, las
                        sanciones comerciales y económicas aplicadas por la Oficina de Control de Activos Extranjeros (&lt;&gt;) del
                        Departamento del Tesoro y las Normas de Tráfico Internacional de Armas (&lt;&gt;) aplicadas por el Departamento
                        de Estado. Usted garantiza que (1) no se encuentra en ningún país al que Estados Unidos haya embargado bienes o
                        haya aplicado alguna otra sanción económica; y (2) no es una parte denegada según se especifica en cualquier ley
                        o normativa de exportación o reexportación aplicable o en leyes similares aplicables en otras jurisdicciones, o
                        que de otro modo figura en cualquier lista de partes prohibidas o restringidas del gobierno de Estados Unidos.
                    </p>
                    <p>Usted se compromete a cumplir todas las leyes y normativas de control de exportaciones y reexportaciones
                        aplicables, incluyendo, entre otras, las EAR y las sanciones comerciales y económicas impuestas por la OFAC. En
                        concreto, usted se compromete a no utilizar, vender, exportar, reexportar, transferir, desviar, liberar o
                        disponer de cualquier otro modo de cualquier producto, software o tecnología, incluidos los productos derivados
                        de dicha tecnología o basados en la misma, recibidos de TrackMelody en virtud de los presentes Términos, a
                        cualquier destino, entidad o persona o para cualquier uso final prohibido por las EAR, las sanciones comerciales
                        y económicas mantenidas por la OFAC o cualquier ley o normativa aplicable de Estados Unidos o de cualquier otra
                        jurisdicción, sin obtener la autorización previa requerida de las autoridades gubernamentales competentes, tal y
                        como exigen dichas leyes y normativas.</p>
                    <h2>4. Contenido y derechos de propiedad intelectual</h2>
                    <h2>Contenido de usuario</h2>
                    <h3>El contenido que usted publica en el servicio</h3>
                    <p>Los usuarios de TrackMelody podrán publicar, cargar o aportar de otro modo contenidos al Servicio de
                        TrackMelody (en lo sucesivo, el &lt;&gt;). Para evitar dudas, el &lt;&gt; incluye toda la información, los
                        materiales y otros contenidos que sean añadidos, creados, cargados, enviados, distribuidos o publicados en el
                        Servicio de TrackMelody (incluido en la Comunidad de soporte de TrackMelody) por los usuarios.</p>
                    <p>Usted es el único responsable de todo el Contenido de usuario que publique.</p>
                    <p>Promete que, con respecto a cualquier Contenido de usuario que publique en TrackMelody, (1) es usted
                        propietario o tiene derecho a publicar dicho Contenido de usuario; (2) dicho Contenido de usuario, o su uso por
                        parte de TrackMelody en virtud de la licencia concedida a continuación, no (i) infrinja los presentes Términos,
                        la legislación aplicable o los derechos de propiedad intelectual o de otro tipo de terceros; o (ii) dicho
                        Contenido de usuario no implique ninguna afiliación o respaldo hacia usted o su Contenido de usuario por parte
                        de TrackMelody o de cualquier artista, banda, sello discográfico u otra persona o entidad sin el consentimiento
                        previo y expreso por escrito de TrackMelody o de dicha persona o entidad.</p>
                    <p>Al publicar o compartir Contenidos de usuario u otra información en el Servicio de TrackMelody, deberá tener en
                        cuenta que los contenidos y demás información serán accesibles públicamente y podrán ser utilizados y
                        compartidos por otros en el Servicio de TrackMelody y en toda la red, por lo que le recomendamos que tenga
                        cuidado al publicar o compartir en el Servicio de TrackMelody, y que sea consciente de la configuración de su
                        cuenta. TrackMelody no es responsable de lo que usted u otras personas publiquen o compartan en el Servicio de
                        TrackMelody.</p>
                    <h3>Supervisión del Contenido de usuario</h3>
                    <p>TrackMelody podrá supervisar o revisar el Contenido de usuario, pero no tiene obligación de hacerlo.
                        TrackMelody se reserva el derecho de eliminar o inhabilitar el acceso a cualquier Contenido de usuario por
                        cualquier motivo o sin él. TrackMelody podrá tomar estas medidas sin previo aviso.</p>
                    <h2>Licencias que nos concede</h2>
                    <h3>Contenido de usuario</h3>
                    <p>Usted conserva la propiedad de su Contenido de usuario cuando lo publica en el Servicio. No obstante, para que
                        podamos poner su Contenido de usuario a disposición del Servicio de TrackMelody, necesitamos que nos conceda una
                        licencia limitada sobre dicho Contenido de usuario. En consecuencia, usted concede a TrackMelody una licencia no
                        exclusiva, transferible, sublicenciable, libre de derechos, totalmente pagada e irrevocable, a escala mundial,
                        para reproducir, poner a disposición, ejecutar y mostrar, traducir, modificar, crear obras derivadas, distribuir
                        y utilizar de cualquier otro modo dicho Contenido de usuario a través de cualquier medio, ya sea solo o en
                        combinación con otros Contenidos o materiales, de cualquier forma y por cualquier medio, método o tecnología,
                        conocidos en la actualidad o que se creen en el futuro, en relación con el Servicio de TrackMelody. Cuando
                        proceda y en la medida en que lo permita la legislación aplicable, también acepta renunciar, y no hacer valer,
                        cualquier &lt;&gt; o derechos equivalentes, como su derecho a ser identificado como autor de cualquier Contenido
                        de usuario, incluidas las Opiniones, y su derecho a oponerse al tratamiento despectivo de dicho Contenido de
                        usuario.</p>
                    <h3>Opiniones</h3>
                    <p>Si usted aporta ideas, sugerencias u otros comentarios en relación con su uso del Servicio de TrackMelody o de
                        cualquier Contenido (en lo sucesivo, las &lt;&gt;), dichas Opiniones no son confidenciales y podrán ser
                        utilizadas por TrackMelody sin restricciones y sin que usted reciba pago alguno. Las Opiniones tienen la
                        consideración de un tipo de Contenido de usuario en virtud de los presentes Términos.</p>
                    <h3>Su Dispositivo</h3>
                    <p>Asimismo, nos concede el derecho (1) de permitir que el Servicio de TrackMelody utilice el procesador, el ancho
                        de banda y el hardware de almacenamiento de su Dispositivo con el fin de facilitar el funcionamiento del
                        Servicio de TrackMelody, (2) de proporcionarle publicidad y otra información, y de permitir que nuestros socios
                        comerciales hagan lo mismo, en la medida en que esté permitido de conformidad con la <a
                            href="https://www.TrackMelody.com/legal/privacy-policy/plain/">Política de privacidad de TrackMelody</a>.</p>
                    <h2>Experiencia de contenido</h2>
                    <p>En cualquier parte del Servicio de TrackMelody, el Contenido al que usted acceda, incluida su selección y
                        colocación, podrá estar condicionado por consideraciones comerciales, incluidos los acuerdos de TrackMelody con
                        terceros.</p>
                    <p>Determinados Contenidos licenciados, proporcionados, creados o puestos a disposición por TrackMelody de otro
                        modo —por ejemplo, los podcasts—, podrán incorporar publicidad, y TrackMelody no será responsable de dicha
                        publicidad.</p>
                    <h2>Reclamaciones por infracción</h2>
                    <p>TrackMelody respeta los derechos de los titulares de la propiedad intelectual. Si cree que algún Contenido
                        infringe sus derechos de autor, consulte la Política de derechos de autor de TrackMelody.</p>
                    <h2>5. Atención al cliente, Información, Preguntas y reclamaciones</h2>
                    <h2>Comunidad de soporte de TrackMelody</h2>
                    <p>La Comunidad de soporte de TrackMelody es un lugar de debate e intercambio de información, consejos y otros
                        materiales relacionados con el Servicio de TrackMelody. Al utilizar la Comunidad de soporte de TrackMelody,
                        acepta los <a href="https://www.TrackMelody.com/legal/support-community-end-user-agreement/plain/">Términos de
                            la Comunidad</a>.</p>
                    <p>Si quieres hablar con nosotros, haz clic aquí para obtener más información.</p>
                    <h2>Asistencia al cliente, información, preguntas y reclamaciones</h2>
                    <p>Para obtener asistencia al cliente con preguntas relacionadas con la cuenta y el pago (en lo sucesivo, las
                        &lt;&gt;), utilice los recursos de asistencia al cliente que se indican en el apartado Acerca de nosotros de
                        nuestro sitio web.</p>
                    <p>Si tiene alguna pregunta relativa al Servicio de TrackMelody o a los presentes Términos (incluidos los términos
                        y condiciones adicionales de TrackMelody incorporados en el presente documento), póngase en contacto con el
                        Servicio de Atención al Cliente de TrackMelody accediendo al apartado &lt;&gt; de nuestro sitio web.</p>
                    <p>Si reside en la Unión Europea, también podrá presentar una reclamación en la plataforma en línea para la
                        resolución alternativa de controversias (plataforma ODR). Puede acceder a la plataforma ODR a través del
                        siguiente enlace: https://ec.europa.eu/consumers/odr.</p>
                    <h2>6. Problemas y controversias</h2>
                    <h2>Suspensión y finalización de los Servicios de TrackMelody</h2>
                    <p>Los presentes Términos seguirán siendo de aplicación en su caso hasta que sean resueltos por usted o por
                        TrackMelody. TrackMelody podrá rescindir los presentes Términos, incluidos los términos y condiciones
                        adicionales que se incorporen al presente documento, o suspender su acceso al Servicio de TrackMelody en
                        cualquier momento si consideramos que ha incumplido cualquiera de los presentes Términos, si dejamos de prestar
                        el Servicio de TrackMelody o cualquier componente material del mismo con un preaviso razonable, o si
                        consideramos que es necesario para cumplir con la legislación aplicable. En caso de que usted o TrackMelody
                        rescindan los presentes Términos, o en caso de que TrackMelody suspenda su acceso al Servicio de TrackMelody,
                        acepta que TrackMelody, con sujeción a la legislación aplicable, no asumirá responsabilidad alguna frente a
                        usted y, salvo lo dispuesto expresamente en los presentes Términos, TrackMelody no le reembolsará ninguna
                        cantidad que haya abonado. Podrá rescindir los presentes Términos en cualquier momento, y en tal caso no podrá
                        seguir accediendo ni utilizando el Servicio de TrackMelody. Si desea saber cómo cancelar su cuenta de
                        TrackMelody, utilice los recursos de Atención al Cliente en nuestra página Acerca de nosotros.</p>
                    <p>Los apartados 4 (Contenido y derechos de propiedad intelectual), 3 (Uso del Servicio de TrackMelody), 2 (El
                        Servicio de TrackMelody que proporcionamos), 6 (Problemas y controversias), 7 (Acerca de los presentes Términos
                        y Condiciones) del presente documento, así como cualquier otra cláusula de los presentes Términos que,
                        explícitamente o por su naturaleza, deba permanecer en vigor incluso tras la extinción de los presentes
                        Términos, seguirán vigentes.</p>
                    <h2>Exenciones de responsabilidad sobre la garantía</h2>
                    <p><strong>TrackMelody prestará el Servicio de TrackMelody con la diligencia y competencia razonables y de
                        conformidad con cualquier especificación del Servicio de TrackMelody facilitada por TrackMelody, si bien, con
                        sujeción a lo anterior, el Servicio de TrackMelody se presta &lt;&gt; y &lt;&lt;según disponibilidad&gt;&gt;,
                        sin garantías de ningún tipo, ya sean expresas, implícitas o legales. Asimismo, TrackMelody y todos los
                        propietarios de contenidos renuncian a cualquier garantía expresa, implícita y legal en relación con los
                        contenidos, incluidas las garantías de calidad satisfactoria, comerciabilidad, idoneidad para un fin
                        determinado o de no infracción. Ni TrackMelody ni ningún propietario de contenidos garantiza que el Servicio
                        de TrackMelody o los contenidos estén libres de malware o de otros componentes dañinos. Por otra parte,
                        TrackMelody no hace ninguna declaración, ni garantiza ni asume responsabilidad alguna, en relación con las
                        aplicaciones de terceros (o el contenido de las mismas), los contenidos de los usuarios, los dispositivos o
                        cualquier producto o servicio anunciado, promocionado u ofrecido por un tercero en el Servicio de TrackMelody
                        o en cualquier sitio web con hipervínculos, o a través de los mismos, y TrackMelody no es responsable de las
                        transacciones entre usted y los terceros proveedores de lo que antecede. Ningún consejo ni información, verbal
                        o por escrito, que usted obtenga de TrackMelody dará lugar a ninguna garantía en nombre de TrackMelody.
                        Durante la utilización del Servicio de TrackMelody, es posible que tenga acceso a las funciones de filtrado de
                        contenidos explícitos, pero el uso de dichas funciones podrá dar lugar a que se ofrezca algún contenido
                        explícito, por lo que no deberá confiar en que dichas funciones filtren todo el contenido explícito. La
                        presente cláusula se aplicará en la medida en que lo permita la legislación aplicable.</strong></p>
                    <p>Algunas jurisdicciones no permiten la exclusión de las garantías implícitas ni la limitación de los derechos
                        legales aplicables a un consumidor, por lo que la exclusión y las limitaciones de la presente cláusula pueden no
                        ser de aplicación en su caso y sus derechos legales no se verán afectados.</p>
                    <h2>Limitación de la responsabilidad y plazo para presentar una reclamación</h2>
                    <p><strong>Con arreglo a la legislación aplicable, acepta que su único y exclusivo recurso en caso de problemas o
                        insatisfacción con el Servicio de TrackMelody es desinstalar cualquier software de TrackMelody y dejar de
                        utilizar el Servicio de TrackMelody. Asimismo, acepta que TrackMelody no tiene ninguna obligación ni
                        responsabilidad derivada de las aplicaciones de terceros o del contenido de las mismas puestas a disposición a
                        través del Servicio de TrackMelody o en relación con el mismo, y si bien su relación con dichas aplicaciones
                        de terceros podrá regirse por acuerdos independientes con dichos terceros, su único y exclusivo recurso, en lo
                        que respecta a TrackMelody, para cualquier problema o insatisfacción con las aplicaciones de terceros o el
                        contenido de las mismas, es desinstalar o dejar de utilizar dichas aplicaciones de terceros.</strong></p>
                    <p><strong>En ningún caso TrackMelody, sus directivos, accionistas, empleados, agentes, consejeros, empresas
                        subsidiarias, filiales, sucesores, cesionarios, proveedores o licenciantes serán responsables de (1) ningún
                        daño indirecto, especial, incidental, punitivo, ejemplar o consecuente; (2) ninguna pérdida de uso, datos,
                        negocio o beneficios, directa o indirecta, en todos los casos derivados del uso o de la imposibilidad de usar
                        el Servicio de TrackMelody, los dispositivos, las aplicaciones de terceros o el contenido de las aplicaciones
                        de terceros; o (3) una responsabilidad agregada por todas las reclamaciones relacionadas con el Servicio de
                        TrackMelody, las aplicaciones de terceros o el contenido de las aplicaciones de terceros superior a la mayor
                        de las siguientes cantidades: (a) las cantidades pagadas por usted a TrackMelody durante los doce meses
                        anteriores a la primera reclamación; o (b) 30,00 USD. Cualquier responsabilidad que nos corresponda por las
                        pérdidas que sufra se limitará estrictamente a las pérdidas que sean razonablemente previsibles.</strong></p>
                    <p><strong>A modo de aclaración, los presentes Términos no limitan la responsabilidad de TrackMelody en caso de
                        fraude, falsedad fraudulenta, muerte o daños personales en la medida en que la legislación aplicable prohíba
                        dicha limitación y por cualquier otra responsabilidad que, en virtud de la legislación aplicable, no pueda ser
                        limitada o excluida.</strong></p>
                    <p><strong>Salvo en aquellos casos en los que dicha restricción esté prohibida por la legislación aplicable,
                        cualquier reclamación que surja en virtud de los presentes Términos debe iniciarse mediante la presentación de
                        una solicitud de arbitraje o la interposición de una demanda individual en virtud del acuerdo de arbitraje que
                        figura a continuación, en el plazo de un (1) año a partir de la fecha en la que la parte que hace valer la
                        reclamación tenga conocimiento por primera vez, o deba tenerlo, del acto, la omisión o el incumplimiento que
                        haya dado lugar a la reclamación, y no existirá derecho a ningún tipo de recurso por cualquier reclamación que
                        no se haga valer dentro de dicho plazo.</strong></p>
                    <h2>Derechos de terceros</h2>
                    <p>Reconoce y acepta que los propietarios del Contenido y ciertos distribuidores, como los proveedores de tiendas
                        de aplicaciones, son beneficiarios de los presentes Términos y tienen derecho a hacerlos cumplir directamente en
                        su contra. Al margen de lo establecido en el presente apartado, los presentes Términos no pretenden otorgar
                        derechos a ninguna otra persona, salvo a usted y a TrackMelody, y en ningún caso los presentes Términos crearán
                        derechos de terceros beneficiarios.</p>
                    <p>Si ha descargado cualquiera de nuestras aplicaciones de software para móvil (cada una, una
                        &lt;&lt;aplicación&gt;&gt;) de App Store de Apple Inc. (&lt;&gt;) o si utiliza la aplicación en un dispositivo
                        iOS, reconoce que ha leído, comprendido y acepta el siguiente aviso relativo a Apple. Los presentes Términos se
                        establecen únicamente entre usted y TrackMelody, no con Apple, y Apple no es responsable del Servicio de
                        TrackMelody ni del contenido del mismo. Apple no tiene obligación alguna de proporcionar ningún servicio de
                        mantenimiento y soporte con respecto al Servicio de TrackMelody. En caso de que el Servicio de TrackMelody no
                        cumpla alguna de las garantías aplicables, podrá notificar a Apple, y Apple le reembolsará el precio de compra
                        aplicable da la aplicación y, en la medida en que lo permita la ley aplicable, Apple no tendrá ninguna otra
                        obligación de garantía con respecto al Servicio de TrackMelody. Apple no se hace responsable de atender ninguna
                        reclamación que usted o un tercero presente en relación con el Servicio de TrackMelody o con su posesión o uso
                        del Servicio de TrackMelody, incluyendo (1) reclamaciones de responsabilidad del producto; (2) cualquier
                        reclamación acerca de que el Servicio de TrackMelody no cumple algún requisito legal o normativo aplicable; (3)
                        reclamaciones que surjan en el marco de la legislación sobre protección del consumidor o legislación similar; y
                        (4) reclamaciones con respecto a la infracción de la propiedad intelectual. Apple no se hace responsable de la
                        investigación, defensa, resolución y descargo de cualquier reclamación de terceros en el sentido de que el
                        Servicio de TrackMelody o su posesión y uso de la aplicación por su parte infringen los derechos de propiedad
                        intelectual de dicho tercero. Acepta cumplir los términos de terceros aplicables cuando utilice el Servicio de
                        TrackMelody. Apple, y las filiales de Apple, son terceros beneficiarios de los presentes Términos, y una vez que
                        usted los acepte, Apple tendrá el derecho, y se considerará que ha aceptado el derecho, de hacer cumplir estos
                        Términos contra usted como tercero beneficiario de los mismos.</p>
                    <h2>Indemnización</h2>
                    <p>Acepta indemnizar a TrackMelody y eximirle de toda responsabilidad por las pérdidas directas razonablemente
                        previsibles, los daños y perjuicios y los gastos razonables (incluidos los honorarios razonables de los abogados
                        y las costas) que sufra o en los que incurra TrackMelody como consecuencia de o en relación con (1) el
                        incumplimiento por su parte de cualquiera de los presentes Términos (incluidos los términos y condiciones
                        adicionales de TrackMelody incorporados en el presente documento); (2) cualquier Contenido de usuario que usted
                        publique o aporte de cualquier otro modo; (3) cualquier actividad en la que participe en el Servicio de
                        TrackMelody o a través del mismo; y (4) la violación por su parte de cualquier ley o de los derechos de un
                        tercero.</p>
                    <h2>6.3.6 Modificaciones</h2>
                    <p>En caso de que TrackMelody introduzca en el futuro alguna modificación en la presente disposición de arbitraje,
                        salvo que se trate de un cambio en la dirección de Notificación de TrackMelody, usted podrá rechazar dicha
                        modificación enviándonos una notificación por escrito en un plazo de 30 días a partir de la modificación de la
                        dirección de Notificación de TrackMelody, en cuyo caso su cuenta con TrackMelody quedará cancelada de inmediato
                        y la presente disposición de arbitraje, en su versión inmediatamente anterior a las modificaciones que usted
                        rechace, seguirá vigente.</p>
                    <h2>6.3.7 Exigibilidad</h2>
                    <p>En caso de que la renuncia a la acción colectiva de la cláusula 6.2 se considere inaplicable en el arbitraje o
                        si cualquier parte de esta cláusula 6.3 se considera inválida o inaplicable, la totalidad de la presente
                        cláusula 6.3 será nula y, en tal caso, las partes acuerdan que la jurisdicción y el lugar exclusivos descritos
                        en la cláusula 6.1 regirán cualquier acción que surja de los acuerdos o esté relacionada con los mismos, y no se
                        le impedirá entablar procedimientos en ningún momento.</p>
                    <h2>7. Acerca de los presentes Términos</h2>
                    <p>De acuerdo con la legislación aplicable, usted podrá tener ciertos derechos que no podrán verse limitados por
                        ningún contrato. Los presentes Términos no pretenden en modo alguno restringir dichos derechos.</p>
                    <h2>Cambios</h2>
                    <p>Nos reservamos el derecho de modificar los presentes Términos (incluidos los términos y condiciones adicionales
                        de TrackMelody incorporados en el presente documento por referencia) puntualmente, notificándole dichos cambios
                        por cualquier medio razonable (antes de que entren en vigor), incluyendo la publicación de un Contrato revisado
                        en el Servicio de TrackMelody correspondiente (siempre que, en el caso de cambios sustanciales, tratemos de
                        complementar dicha notificación por correo electrónico, un mensaje emergente en el servicio u otros medios).
                        Dichos cambios no serán de aplicación a ninguna controversia entre usted y nosotros que surja antes de la fecha
                        en la que publiquemos los Términos revisados, u otros términos y condiciones de TrackMelody, que incorporen
                        dichos cambios, o que le notifiquemos de otro modo dichos cambios. El uso que usted haga del Servicio de
                        TrackMelody después de cualquier modificación de los presentes Términos constituirá su aceptación de dichos
                        cambios. Si no desea seguir utilizando el Servicio de TrackMelody con arreglo a los Términos actualizados, podrá
                        cancelar su cuenta poniéndose en contacto con nosotros. La fecha de entrada en vigor que figura en la parte
                        superior del presente documento indica cuándo se modificaron por última vez los presentes Términos.</p>
                    <h2>Divisibilidad y renuncia</h2>
                    <p>Salvo que se indique lo contrario en los presentes Términos, en caso de que alguna disposición de los mismos se
                        considere inválida o inaplicable por cualquier motivo o en cualquier medida, las restantes disposiciones de los
                        presentes Términos no se verán afectadas, y la aplicación de dicha disposición se llevará a cabo en la medida
                        permitida por la ley.</p>
                    <p>El hecho de que TrackMelody o cualquier tercero beneficiario no haga cumplir los presentes Términos o cualquier
                        disposición de las mismas no supondrá una renuncia al derecho de TrackMelody o de dicho tercero beneficiario a
                        hacerlo.</p>
                </div>
            </div>
        </>
    );
}

export default Terminos;
